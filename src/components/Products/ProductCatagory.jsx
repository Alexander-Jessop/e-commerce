import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    const fetchCatProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setCatProducts(response.data);
      } catch (error) {
        console.error("Error fetching cat products:", error);
      }
    };

    fetchCatProducts();
  }, [category]);

  if (catProducts.length === 0) {
    return <div>Loading...</div>;
  }

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {catProducts.map((product) => (
          <Card key={product.id} className="w-full h-full">
            <h2 className="text-xl font-bold mb-4">{product.title}</h2>
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
                  Original Price:{" "}
                  <span className="line-through text-red-500">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="mt-auto">
                <Button
                  className="mt-2"
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
