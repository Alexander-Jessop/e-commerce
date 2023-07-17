import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { FBAuthContext } from "../firebase/FBAuthProvider";

import HeroBanner from "../components/LandingPage/HeroBanner";
import SaleSection from "../components/LandingPage/SaleSection";
import SelectCatagory from "../components/LandingPage/SelectCategory";
import TrendingSection from "../components/LandingPage/TrendingSection";
import RanNumGen from "../utils/RanNumGen";
import WatchList from "../components/LandingPage/WatchList";

const LandingPage = () => {
  const { user } = useContext(FBAuthContext);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const fetchCarouselProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const randomNumbers = RanNumGen(0, allProducts.length - 1, 5);
        const selectedProducts = randomNumbers.map((num) => allProducts[num]);

        const ranNums = RanNumGen(0, allProducts.length - 1, 5);
        const trendingProd = ranNums.map((num) => allProducts[num]);

        setTrendingProducts(trendingProd);
        setCarouselProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCarouselProducts();
  }, []);

  return (
    <>
      <HeroBanner />
      <SaleSection carouselProducts={carouselProducts} />
      <SelectCatagory />
      <TrendingSection trendingProducts={trendingProducts} />
      {user && <WatchList user={user} />}
    </>
  );
};

export default LandingPage;
