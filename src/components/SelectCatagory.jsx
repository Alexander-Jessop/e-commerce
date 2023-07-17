import FakeStoreAPI from "../hooks/FakeStoreApi";
import Card from "./UI/Card";

const SelectCatagory = () => {
  const { data: catList } = FakeStoreAPI(
    "https://fakestoreapi.com/products/categories"
  );

  const catProducts = [];

  catList.forEach((cat) => {
    const { data: products } = FakeStoreAPI(
      `https://fakestoreapi.com/products/category/${cat}`
    );
    catProducts.push(products);
  });

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <hr />
      <div className="grid grid-cols-2 gap-10">
        {catList.map((cat, index) => (
          <Card
            key={cat}
            className="p-4 flex flex-col items-center justify-center"
          >
            <h3 className="text-xl font-bold mb-2 capitalize">{cat}</h3>
            {catProducts[index].length > 0 ? (
              <img
                src={catProducts[index][0].image}
                alt={catProducts[index][0].title}
                className="object-cover w-full h-44 mb-2"
              />
            ) : (
              <p>No products available</p>
            )}
            <button className="bg-primary hover:bg-secondary hover:font-bold text-white py-2 px-4 rounded self-center">
              View Products
            </button>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default SelectCatagory;
