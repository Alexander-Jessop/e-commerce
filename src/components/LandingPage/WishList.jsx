import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FBAuthContext } from "../../firebase/FBAuthProvider";
import { CartCtx } from "../context/CartContext";
import Card from "../UI/Card";
import Button from "../UI/Button";

const WishList = () => {
  const { toggleWishlist, profile } = useContext(FBAuthContext);
  const [wishList, setWishList] = useState([]);
  const { addToCart } = useContext(CartCtx);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const item = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
    };

    addToCart(item);
  };

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        if (profile && profile.wishlist) {
          const wishlistIds = profile.wishlist;
          const promises = wishlistIds.map(async (id) => {
            const response = await axios.get(
              `https://fakestoreapi.com/products/${id}`
            );
            return response.data;
          });

          const wishlistItems = await Promise.all(promises);
          setWishList(wishlistItems);
        }
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchWishlistItems();
  }, [profile]);

  const handleToggleWishlist = async (product) => {
    try {
      if (isProductInWishlist(product.id)) {
        await toggleWishlist(product.id, "remove");
        setWishList((prevWishlist) =>
          prevWishlist.filter((item) => item.id !== product.id)
        );
      } else {
        await toggleWishlist(product.id, "add");
        setWishList((prevWishlist) => [...prevWishlist, product]);
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const isProductInWishlist = (productId) => {
    return wishList.some((item) => item.id === productId);
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
        <hr />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {wishList.map((product) => (
            <Card key={product.id} className="p-4 w-72 bg-white flex flex-col">
              <div
                className="cursor-pointer"
                onClick={() => handleNavigate(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-48 mb-4"
                />
              </div>
              <h3
                className="text-lg font-bold mb-2 cursor-pointer"
                onClick={() => handleNavigate(product.id)}
              >
                {product.title
                  .split(" ")
                  .slice(0, 5)
                  .map((word) => word.trim())
                  .join(" ")}
              </h3>

              <div className="mt-auto">
                <p className="text-gray-600 mb-2">
                  Price: ${product.price.toFixed(2)}
                </p>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
                <Button
                  className="bg-red-500 hover:bg-secondary hover:font-bold text-white py-2 px-4 rounded mt-2"
                  onClick={() => handleToggleWishlist(product)}
                >
                  Remove from Wishlist
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
