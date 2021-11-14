import React from "react";
import { productData } from "../../components/FakeData";
import Product from "./Product";
import "./productsPage.scss";

export default function ProductsPage() {
  return (
    <div className="products-page-container">
      {productData.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
