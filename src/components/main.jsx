import { useState, useEffect } from "react";
import ShoppingCard from "./shoppingCard";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div>
      <h1>Your favorites products here:</h1>
      <section className="products-grid">
        {products &&
          products.map((product) => (
            <ShoppingCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
      </section>
    </div>
  );
};

export default Main;
