import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../UI/Card";
import Button from "../UI/Button";

const SaleCarousel = ({ carouselProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.preventDefault();
    const selectedProduct = carouselProducts[currentIndex];
    const productId = selectedProduct.id;
    const salePrice = (selectedProduct.price * 0.7).toFixed(2);
    const state = { salePrice };
    navigate(`/product/${productId}`, { state });
  };

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
        <Card key={product.id} className="w-full h-full">
          <h2
            className="text-xl font-bold mb-4 cursor-pointer"
            onClick={handleBuyNow}
          >
            {product.title}
          </h2>
          <div
            className="h-44 overflow-hidden cursor-pointer"
            onClick={handleBuyNow}
          >
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
              <Button className="mt-2" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  );
};

export default SaleCarousel;
