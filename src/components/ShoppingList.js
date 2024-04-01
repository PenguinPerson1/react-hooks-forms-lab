import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [workingList, setWorkingList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  function onItemFormSubmit(item) {
    setWorkingList([...workingList, item]);
    
  }
  

  const itemsToDisplay = workingList.filter(item => item.name.includes(search)).filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
