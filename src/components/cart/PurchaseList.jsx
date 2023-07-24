import { useContext } from "react";
import { CartCtx } from "../context/CartContext";

const PurchaseList = () => {
  const { cartItems } = useContext(CartCtx);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
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
            <li key={item.name} className="flex flex-row mb-2 justify-between">
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
  );
};

export default PurchaseList;
