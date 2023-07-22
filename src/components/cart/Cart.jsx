import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartCtx } from "../context/CartContext";
import Modal from "../Modal";
import Button from "../UI/Button";

const Cart = ({ toggleModal }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartCtx);
  const navigate = useNavigate();

  const navigateToCheckout = (e) => {
    e.preventDefault();
    toggleModal();
    navigate("/checkout");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const addToCartHandler = (item) => {
    item = { ...item, quantity: 1 };
    addToCart(item);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className="p-4 min-w-[20rem] lg:min-w-[45rem] md:min-w-[30rem] max-h-[50rem]">
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        {cartItems.length === 0 ? (
          <>
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
            <div className="flex justify-end" onClick={toggleModal}>
              <Button className="bg-red-500 hover:bg-red-600">Close</Button>
            </div>
          </>
        ) : (
          <>
            <div className="max-h-[35rem] overflow-y-scroll p-2">
              <ul>
                <li className="flex justify-between items-center mb-2 min-h-[4rem] font-semibold invisible md:visible">
                  <div>Name</div>
                  <div className="ml-52">Price</div>
                  <div>Quantity</div>
                </li>
                <hr className="invisible md:visible" />
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <li className="flex flex-col md:flex-row justify-between items-center mb-2 min-h-[4rem]">
                      <div className="font-bold w-[15rem] text-center md:text-left">
                        {item.name}
                      </div>
                      <div>{item.price.toFixed(2)}</div>
                      <div className="flex items-center">
                        <button
                          className="text-xl text-black hover:font-bold hover:text-red-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          -
                        </button>
                        <div className="ml-2 mr-2">{item.quantity}</div>
                        <button
                          className="text-xl text-black hover:font-bold  hover:text-primary"
                          onClick={() => addToCartHandler(item)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <hr />
                  </div>
                ))}
              </ul>
            </div>
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
            <div className="mt-4 flex justify-end gap-4">
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={toggleModal}
              >
                Close
              </Button>
              <Button onClick={navigateToCheckout}>Checkout</Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
