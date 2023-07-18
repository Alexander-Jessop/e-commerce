import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FBAuthContext } from "../../firebase/FBAuthProvider";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductCategory = ({ user, catProducts }) => {
  const navigate = useNavigate();
  const { toggleWishlist, profile } = useContext(FBAuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (profile && profile.wishlist) {
      setWishlist(profile.wishlist);
    } else {
      setWishlist([]);
    }
  }, [profile]);

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  const handleToggleWishlist = async (product) => {
    try {
      if (isProductInWishlist(product.id)) {
        await toggleWishlist(product.id, "remove");
      } else {
        await toggleWishlist(product.id, "add");
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const isProductInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const titleReducer = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ");
    }
    return title;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
      {catProducts.map((product) => (
        <Card key={product.id} className="w-full h-full">
          <h2 className="text-xl font-bold mb-4">
            {titleReducer(product.title)}
          </h2>
          <div className="h-44 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <p className="mt-10">
                <span className="text-lg font-bold">Price:</span> $
                {product.price.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col mt-auto">
              <Button
                className="mt-2 min-w-[10rem]"
                onClick={() => handleBuyNow(product.id)}
              >
                View
              </Button>
              <Button
                className="mt-2 min-w-[10rem]"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
              {user && (
                <Button
                  className={
                    isProductInWishlist(product.id)
                      ? "mt-2 min-w-[10rem] bg-red-500"
                      : "mt-2 min-w-[10rem]"
                  }
                  onClick={() => handleToggleWishlist(product)}
                >
                  {isProductInWishlist(product.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCategory;
