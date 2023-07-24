import CartForm from "../components/cart/CartForm";
import PurchaseList from "../components/cart/PurchaseList";

const CheckoutPage = () => {
  return (
    <div className="p-4">
      <PurchaseList />
      <CartForm />
    </div>
  );
};

export default CheckoutPage;
