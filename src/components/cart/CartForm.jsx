import { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { httpsCallable } from "firebase/functions";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

import { FBCtx } from "../../firebase/FBProvider";
import { CartCtx } from "../context/CartContext";
import { FBAuthContext } from "../../firebase/FBAuthProvider";
import Card from "../UI/Card";

const CartForm = () => {
  const { cartItems } = useContext(CartCtx);
  const { user } = useContext(FBAuthContext);
  const { db, functions } = useContext(FBCtx);
  const stripe = useStripe();
  const elements = useElements();

  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("123 Main Fake St.");
  const [city, setCity] = useState("Fakatoon");
  const [province, setProvince] = useState("Neverland");
  const [postalCode, setPostalCode] = useState("A2Z1A2");
  const [country, setCountry] = useState("CA");
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptUrl, setReceiptUrl] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!stripe || !elements) {
        console.error("Stripe is not loaded properly.");
        return;
      }

      setIsProcessing(true);

      const data = {
        amount: Math.round(total * 100),
        currency: "cad",
        cardholderName,
        email,
        address,
        city,
        province,
        postalCode,
        country,
      };

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: cardholderName,
          email,
          address: {
            line1: address,
            city,
            state: province,
            postal_code: postalCode,
            country,
          },
        },
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
        setIsProcessing(false);
        return;
      }

      const cardNumber = paymentMethod.card.last4;

      const createPaymentIntent = httpsCallable(
        functions,
        "createPaymentIntent"
      );

      const result = await createPaymentIntent({
        paymentMethodId: paymentMethod.id,
        currency: "cad",
        amount: data.amount,
        receipt_email: email,
      });

      const paymentStatus = result.data.status;
      const receiptUrl = result.data.receiptUrl;

      if (paymentStatus !== "succeeded") {
        setIsProcessing(false);
        alert("Payment failed.");
        console.error("Error creating payment intent:", paymentStatus);
        return;
      }

      const currentDate = new Date();
      const createdAt = currentDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });

      const order = {
        items: cartItems,
        amount: total,
        cardNumber,
        paymentIntentId: paymentMethod.id,
        createdAt: createdAt,
        receiptUrl,
        email,
        shipping: { address, city, province, postalCode, country },
      };

      if (user) {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, { orders: arrayUnion(order) });
      }

      await addDoc(collection(db, "orders"), order);

      setIsProcessing(false);
      window.open(receiptUrl, "_blank");

      setReceiptUrl(receiptUrl);

      setCardholderName("");
      setEmail("");
      setAddress("");
      setCity("");
      setProvince("");
      setPostalCode("");
      setCountry("");
      elements.getElement(CardElement).clear();
    } catch (err) {
      setIsProcessing(false);
      console.error("Error creating payment intent:", err.message);
    }
  };

  return (
    <>
      <Card className="max-w-[40rem] mx-auto bg-white">
        <h2 className="text-2xl font-bold text-center">Payment Details</h2>
        <form>
          <div className="mb-2">
            <label htmlFor="cardholderName" className="block font-bold mb-1">
              Cardholder Name:
            </label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Full Name as it appears on your card"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block font-bold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Email address for receipt"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="block font-bold mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Shipping address"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="city" className="block font-bold mb-1">
              City:
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="City"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="province" className="block font-bold mb-1">
              State/Province:
            </label>
            <input
              type="text"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="State/Province"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="postalCode" className="block font-bold mb-1">
              Postal/Zip Code:
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Postal/Zip"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="country" className="block font-bold mb-1">
              Country:
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Country"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="cardElement" className="block font-bold mb-1">
              Card Details:
            </label>
            <p className="text-xs">Testing info: </p>
            <span className="text-xs">Card Number: 4242 4242 4242 4242 </span>
            <span className="text-xs">Expiration Date: 12/34 </span>
            <span className="text-xs">CVC: 123</span>
            <CardElement
              id="cardElement"
              className="w-full p-2 border rounded"
              options={{
                hidePostalCode: true,
              }}
            />
          </div>
          <button
            onClick={handleFormSubmit}
            disabled={isProcessing || cartItems.length === 0}
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : "Submit"}
          </button>
        </form>
        {cartItems.length === 0 && (
          <p className="text-center mt-4">Your cart is empty.</p>
        )}
        {receiptUrl && (
          <>
            <p>
              To see your receipt please visit this{" "}
              <a href={receiptUrl} className="text-blue-500">
                URL
              </a>
            </p>
          </>
        )}
      </Card>
    </>
  );
};

export default CartForm;
