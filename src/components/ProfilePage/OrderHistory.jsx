import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const OrderHistory = ({ profile }) => {
  const orders = profile?.orders || [];
  const firstFiveOrders = orders.slice(0, 5);
  const [showDetails, setShowDetails] = useState(
    Array(firstFiveOrders.length).fill(false)
  );

  const toggleDetails = (index) => {
    setShowDetails((prev) => {
      const updatedDetails = [...prev];
      updatedDetails[index] = !updatedDetails[index];
      return updatedDetails;
    });
  };

  return (
    <div className="mt-10 container p-8 mx-auto">
      <h2 className="text-2xl font-bold">Order History</h2>
      <hr className="mt-2 mb-4" />
      {firstFiveOrders.length > 0 ? (
        <ul>
          {firstFiveOrders.map((order, index) => (
            <li key={index}>
              <Card className="p-4 mb-4 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">
                      Order ID: {order.paymentIntentId}
                    </p>
                    <p className="text-gray-500">
                      Created At: {order.createdAt}
                    </p>
                    <p className="font-bold mt-2">
                      Amount: ${order.amount.toFixed(2)}
                    </p>
                  </div>
                  <Button onClick={() => toggleDetails(index)}>
                    {showDetails[index] ? "Show Less" : "Show More"}
                  </Button>
                </div>
                {showDetails[index] && (
                  <div className="mt-4">
                    <p className="font-semibold">
                      Card Number: ************{order.cardNumber}
                    </p>
                    <p className="font-semibold">Email: {order.email}</p>
                    <p>
                      Receipt URL:{" "}
                      <a
                        href={order.receiptUrl}
                        className="text-blue-500 underline"
                      >
                        CLICK HERE
                      </a>
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold">Shipping Address:</p>
                      <p className="ml-4">Address: {order.shipping.address}</p>
                      <p className="ml-4">City: {order.shipping.city}</p>
                      <p className="ml-4">Country: {order.shipping.country}</p>
                      <p className="ml-4">
                        Postal Code: {order.shipping.postalCode}
                      </p>
                      <p className="ml-4">
                        Province: {order.shipping.province}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
