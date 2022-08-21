import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
function Global({ children }) {
  const [products, setProduct] = useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const DeleteProduct = (id) => {
    setProduct(products.filter((p) => p.id != id));
  };

  const AddProduct = (form) => {
    setProduct((p) => [...p, form]);
  };
  return (
    <GlobalContext.Provider
      value={{ products, setProduct, fetchProducts, DeleteProduct, AddProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Global;
