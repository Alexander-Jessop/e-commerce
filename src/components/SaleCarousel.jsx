import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Card from "./UI/Card";
import RanNumGen from "../utils/RanNumGen";
import Button from "./UI/Button";

const SaleCarousel = () => {
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchCarouselProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const randomNumbers = RanNumGen(0, allProducts.length - 1, 5);
        const selectedProducts = randomNumbers.map((num) => allProducts[num]);

        setCarouselProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCarouselProducts();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [carouselProducts.length]);

  if (carouselProducts.length === 0) {
    return <div>Loading Carousel...</div>;
  }

  return (
    <Carousel
      selectedItem={currentIndex}
      showThumbs={false}
      className="p-3 max-w-[25rem]"
      showStatus={false}
    >
      {carouselProducts.map((product) => (
        <Card key={product.id} className="w-80 h-full">
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
              <p>
                <span className="text-red-500">
                  Sale Price: ${(product.price * 0.7).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="mt-auto">
              <Button className="mt-2">Buy Now</Button>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  );
};

export default SaleCarousel;
