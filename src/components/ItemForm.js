import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({name:"", category:"produce"});
  function onItemFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })}
  function getItem(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: formData.name,
      category: formData.category,
    })
  }
  return (
    <form className="NewItem" onSubmit={getItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={onItemFormChange} />
      </label>

      <label>
        Category:
        <select name="category"onChange={onItemFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
