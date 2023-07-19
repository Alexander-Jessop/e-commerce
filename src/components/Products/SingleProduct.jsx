import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { FBAuthContext } from "../../firebase/FBAuthProvider";
import { CartCtx } from "../context/CartContext";
import ProductReview from "./ProductReview";
import Button from "../UI/Button";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishListErr, setWishListErr] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const { user, profile, toggleWishlist } = useContext(FBAuthContext);
  const { addToCart } = useContext(CartCtx);
  const navigate = useNavigate();
  const location = useLocation();
  const salePrice = location.state?.salePrice;

  const handleAddToCart = (product) => {
    const item = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
    };

    addToCart(item);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    setIsInWishlist(
      user && profile && profile.wishlist && profile.wishlist.includes(id)
    );
  }, [id, user, profile]);

  const handleWishList = async (e) => {
    e.preventDefault();
    if (!user) {
      setWishListErr(true);
    } else {
      try {
        if (isInWishlist) {
          await toggleWishlist(+id, "remove");
        } else {
          await toggleWishlist(+id, "add");
        }
        setIsInWishlist(!isInWishlist);
      } catch (error) {
        console.error("Error toggling wishlist:", error);
      }
    }
  };

  const handleLogin = () => {
    const productId = id;
    const state = { showSignInForm: true, productId };
    navigate("/user-auth", { state });
  };
  if (!product) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen mt-72 lg:mt-44 xl:mt-0">
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row max-w-[60rem] mx-auto mb-6">
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex-shrink-0 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-auto max-w-[30rem] min-w-[10rem] lg:max-w-full lg:min-w-auto max-h-[20rem]"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p>
              <span className="font-bold">Category: </span>
              {product.category}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-2 lg:mb-0">
                {salePrice ? (
                  <p className="text-xl font-bold text-red-500">
                    Sale Price: ${salePrice}
                  </p>
                ) : (
                  <p className="text-xl font-bold text-red-500">
                    Price: ${product.price.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col lg:flex-row">
                <Button
                  className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded min-w-[10rem] mb-2 lg:mb-0 lg:mr-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  className={`bg-primary hover:bg-secondary text-white py-2 px-4 rounded min-w-[13rem] ${
                    isInWishlist ? "bg-red-500" : ""
                  }`}
                  onClick={handleWishList}
                >
                  {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
            {wishListErr && (
              <>
                <p className="text-red-500 mt-2">
                  You must be logged in to add to your wishlist.
                </p>
                <Button onClick={handleLogin}>Login</Button>
              </>
            )}
          </div>
        </div>
        <div className="text-left">
          <h2 className="mb-4 ml-2 font-bold text-2xl">Product Reviews</h2>
          <div className="flex justify-center">
            <ProductReview product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
