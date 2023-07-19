import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const FeaturedCatItem = ({ featuredItem }) => {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mb-6">
      {featuredItem && (
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg p-6 flex items-center">
              <div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleBuyNow(featuredItem.id)}
              >
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  className="object-cover w-44 h-44 rounded-lg"
                />
              </div>
              <div className="ml-6">
                <h2
                  className="text-lg font-bold mb-2 cursor-pointer"
                  onClick={() => handleBuyNow(featuredItem.id)}
                >
                  Featured: {featuredItem.title}
                </h2>
                <p className="text-lg font-bold mb-4">
                  Price: ${featuredItem.price.toFixed(2)}
                </p>
                <p className="mb-6">
                  Hot Item of the Category! Grab one now while supplies last.
                </p>
                <Button onClick={() => handleBuyNow(featuredItem.id)}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCatItem;
