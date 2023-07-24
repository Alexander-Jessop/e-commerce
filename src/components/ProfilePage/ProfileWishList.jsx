import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { FBAuthContext } from "../../firebase/FBAuthProvider";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ProfileWishList = () => {
  const { profile, toggleWishlist } = useContext(FBAuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    if (profile && profile.wishlist) {
      setWishlist(profile.wishlist);
    } else {
      setWishlist([]);
    }
  }, [profile]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        const products = await Promise.all(
          wishlist.map(async (id) => {
            try {
              const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
              );
              return response.data;
            } catch (error) {
              console.error(`Error fetching product with id ${id}:`, error);
              return null;
            }
          })
        );
        setWishlistProducts(products.filter((product) => product !== null));
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      }
    };
    if (wishlist.length > 0) {
      fetchWishlistProducts();
    }
  }, [wishlist]);

  return (
    <div className="container p-8 mx-auto">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-2">Wishlist</h2>
        <hr className="mb-4" />
        {wishlistProducts.length > 0 ? (
          wishlistProducts.map((product) => (
            <Card key={product.id}>
              <div className="flex items-center flex-col lg:flex-row">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-24 h-24 mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 max-w-[30rem]">
                    {product.title}
                  </h3>
                  <p className="text-primary-500 font-bold mb-2">
                    Price: ${product.price}
                  </p>
                </div>
                <div>
                  <Button
                    onClick={() => toggleWishlist(product.id)}
                    className="max-w-[13rem] bg-red-500"
                  >
                    Remove from Wishlist
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No items in wishlist</p>
        )}
      </div>
    </div>
  );
};

export default ProfileWishList;
