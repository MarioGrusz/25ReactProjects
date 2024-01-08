import React, { useEffect, useState } from "react";
import "./index.scss";

const LoadMoreData = () => {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  console.log("products", products);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const reponse = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await reponse.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading Data! Please Wait</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              return (
                <div key={item.id} className="product">
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <button>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
