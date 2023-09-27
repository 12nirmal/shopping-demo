import React, { useEffect } from "react";
import { useState } from "react";
// import products from "../_mock/product_items";
import ProductCard from "../components/product/ProductCard";
import axios from "axios";

function Product() {
  const [query, setQuery] = useState("");
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((result) => {
          console.log();
          setProducts(result.data.products);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const listitems = Products.map((item) => (
    <ProductCard item={item} key={item.id} />
  ));

  return (
    <>
      <div className="main_content">
        <h3 className="Pro">Shop</h3>
        <div className="cart-box">
          <select className="options">
            <option>OPTIONS</option>
            <option>LOGIN</option>
            <option>ABOUTS</option>
            <option>CONTACT</option>
          </select>
        </div>
        <div className="search">
          <input
            onChange={(event) => setQuery(event.target.value)}
            className="search-1"
            // type="text"
            placeholder="Search..."
          />
        </div>

        {Products.filter((item) => {
          if (query === "") {
            return item;
          } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
            return item;
          }
          return false;
        }).map((item, index) => (
          <div className="SE" key={index}>
            {/* <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p> */}
          </div>
        ))}
        {listitems}
      </div>
    </>
  );
}

export default Product;
