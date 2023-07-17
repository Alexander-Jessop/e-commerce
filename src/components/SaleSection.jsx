import SaleCarousel from "./SaleCarousel";

const SaleSection = () => {
  return (
    <section className="bg-gray-100 py-8 p-16">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Featured Sale Items</h2>
          <p className="text-gray-600">
            Don&apos;t miss out on{" "}
            <span className="text-xl font-bold text-red-500">hot sales!</span>{" "}
            Check back daily for new features and exciting offers.
          </p>
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <SaleCarousel />
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
