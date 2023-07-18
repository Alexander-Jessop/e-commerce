import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../UI/Card";

const SelectCategory = () => {
  const [catList, setCatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [catProducts, setCatProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const data = response.data;
        setCatList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCatProducts = async () => {
      try {
        const products = await Promise.all(
          catList.map(async (cat) => {
            try {
              const response = await axios.get(
                `https://fakestoreapi.com/products/category/${cat}`
              );
              return response.data;
            } catch (error) {
              console.error(
                `Error fetching products for category ${cat}:`,
                error
              );
              return [];
            }
          })
        );
        setCatProducts(products);
      } catch (error) {
        console.error("Error fetching cat products:", error);
      }
    };

    if (catList.length > 0) {
      fetchCatProducts();
    }
  }, [catList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleViewProducts = (cat) => {
    const cleanedCategory = cat.replace(/[^\w\s]/gi, "&apos;");
    const formattedCategory = cleanedCategory.replace(/\s+/g, "-");
    navigate(`/products/${formattedCategory}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {catList.length > 0 ? (
          catList.map((cat, index) => (
            <Card
              key={cat}
              className="p-4 flex flex-col items-center justify-between"
            >
              <h3
                className="text-xl font-bold mb-2 capitalize cursor-pointer"
                onClick={() => handleViewProducts(cat)}
              >
                {cat}
              </h3>
              {catProducts[index] && catProducts[index].length > 0 ? (
                <img
                  src={catProducts[index][0].image}
                  alt={catProducts[index][0].title}
                  className="object-cover w-full h-44 mb-2"
                />
              ) : (
                <p>No products available</p>
              )}
              <button
                className="bg-primary hover:bg-secondary hover:font-bold text-white py-2 px-4 rounded mt-auto"
                onClick={() => handleViewProducts(cat)}
              >
                View Products
              </button>
            </Card>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default SelectCategory;
