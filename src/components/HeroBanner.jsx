import Button from "./UI/Button";

const HeroBanner = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            Welcome to <span className="text-selected">OMNI MARKET</span>
          </h1>
          <p className="mt-4 text-xl text-white max-w-[22rem] mx-auto">
            Where extraordinary meets elegance, providing a one-stop shop for
            all types of amazing products.
          </p>
          <Button className="font-semibold px-6 py-3 mt-8 hover:bg-secondary hover:text-primary transition duration-300">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
