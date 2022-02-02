import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [foods, setFoods] = useState(items)

  function handleSelectedCategory(event){
    setSelectedCategory(event.target.value)
  }

  const foodsToDisplay = foods.filter(food => {
    if(selectedCategory === 'All'){
      return true
    } else {
      return food.category === selectedCategory;
    }
  })

  const foodList = foodsToDisplay.map(food => {
    return <Item key={food.id} name={food.name} category={food.category} />
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;
