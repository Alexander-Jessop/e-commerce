import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FBAuthContext } from "../firebase/FBAuthProvider";

import ProductCategory from "../components/Products/ProductCatagory";
import FeaturedCatItem from "../components/Products/FeaturedCatItem";

const CategoryPage = () => {
  let { category } = useParams();
  category = category.replace(/-/g, " ").replace(/&apos;/g, "'");

  const { user } = useContext(FBAuthContext);

  const [catProducts, setCatProducts] = useState([]);
  const [featuredItemIndex, setFeaturedItemIndex] = useState(null);

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

  useEffect(() => {
    if (catProducts.length > 0) {
      setFeaturedItemIndex(Math.floor(Math.random() * catProducts.length));
    }
  }, [catProducts]);

  if (catProducts.length === 0 || featuredItemIndex === null) {
    return <div>Loading...</div>;
  }

  const featuredItem = catProducts[featuredItemIndex];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold capitalize mb-2 mt-24">{category}</h2>
      <hr className="mb-4" />
      <FeaturedCatItem featuredItem={featuredItem} />
      <ProductCategory user={user} catProducts={catProducts} />
    </div>
  );
};

export default CategoryPage;
