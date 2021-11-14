import React from "react";

function CategoryItem({ item }) {
  return (
    <div className="img-container">
      <img src={item.img} />
      {/* <title>{item.title}</title> */}
    </div>
  );
}
export default CategoryItem;
