import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState('')
  const [items,setItems]=useState(props.items)
  console.log(items)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  function onSearchChange(e){
    const val=e.target.value
    if(val){
      setSearch(val)
      const newItems=items.filter((itm)=>itm.name.toLowerCase().includes(val.toLowerCase()))
      setItems(newItems)
      
    }else{
      setItems(props.items)
      setSearch('')
      
    }
  }
  const onItemFormSubmit=(item)=>{
    setItems(item)
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
