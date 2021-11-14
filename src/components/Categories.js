import React from "react";
import CategoryItem from "./CategoryItem";
import { categoriesData } from "./FakeData";
import "./catrgories.scss";

function Categories() {
  return (
    <div className="categories-container">
      {categoriesData.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
}
export default Categories;
