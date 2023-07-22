import { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { httpsCallable } from "firebase/functions";

import { FBCtx } from "../../firebase/FBProvider";
import { CartCtx } from "../context/CartContext";
import Card from "../UI/Card";

const CartForm = () => {
  const { cartItems } = useContext(CartCtx);
  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { db, functions } = useContext(FBCtx);

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
        currency: "usd",
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
      const expirationDate = `${paymentMethod.card.exp_month}/${paymentMethod.card.exp_year}`;
      const cvc = "";

      const createPaymentIntent = httpsCallable(
        functions,
        "createPaymentIntent"
      );
      const result = await createPaymentIntent({
        ...data,
        paymentMethodId: paymentMethod.id,
        cardNumber,
        expirationDate,
        cvc,
      });

      console.log("result", result.data, result);
    } catch (err) {
      setIsProcessing(false);
      console.error("Error creating payment intent:", err.message);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 bg-white max-w-[35rem] mt-16 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Purchase Details</h2>
        <ul>
          <li className="flex flex-row mb-2 justify-between">
            <div className="max-w-[15rem]">Name</div>
            <div className="ml-52">Price</div>
            <div>Quantity</div>
          </li>
          <hr className="mb-4" />
          {cartItems.map((item) => (
            <>
              <li
                key={item.name}
                className="flex flex-row mb-2 justify-between"
              >
                <div className="w-[15rem] font-bold">{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <div>{item.quantity}</div>
              </li>
              <hr />
            </>
          ))}
        </ul>
        <div className="mt-4">
          <div className="flex justify-end">
            <div className="font-bold">Subtotal:</div>
            <div className="ml-4 w-16 text-end">${subtotal.toFixed(2)}</div>
          </div>
          <div className="flex justify-end">
            <div className="font-bold">Tax:</div>
            <div className="ml-4 w-16 text-end">${tax.toFixed(2)}</div>
          </div>
          <div className="flex justify-end">
            <hr className="w-36" />
          </div>
          <div className="flex justify-end">
            <div className="font-bold">Total:</div>
            <div className="ml-4 w-16 text-end">${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
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
            />
          </div>
          <div className="mb-2">
            <label htmlFor="postalCode" className="block font-bold mb-1">
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className="w-full p-2 border rounded"
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
            />
          </div>
          <div className="mb-2">
            <label htmlFor="cardElement" className="block font-bold mb-1">
              Card Details:
            </label>
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
            disabled={isProcessing}
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : "Submit"}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default CartForm;
