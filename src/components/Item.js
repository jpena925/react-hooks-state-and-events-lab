import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState(false)

  const adjustClass = add ? "in-cart" : ""

  function handleAddClick(){
    setAdd(() => !add)
  }

  return (
    <li className={adjustClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddClick} className="add">{add ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
