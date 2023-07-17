import Card from "../UI/Card";

const TrendingSection = ({ trendingProducts }) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
        <hr />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="p-4 w-72 bg-white flex flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-48 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">
                {product.title
                  .split(" ")
                  .slice(0, 5)
                  .map((word) => word.trim())
                  .join(" ")}
              </h3>

              <div className="mt-auto">
                <p className="text-gray-600 mb-2">
                  Price: ${product.price.toFixed(2)}
                </p>
                <button className="bg-primary hover:bg-secondary hover:font-bold text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
