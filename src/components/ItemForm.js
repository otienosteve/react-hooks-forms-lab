import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit,items}) {
  const [add,setAdd]=useState()
  const [category,setCategory]=useState('Produce')
  console.log(typeof(items))
  const handleSubmit=(e)=>{
  const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: add,
      category: category
    };

    const newItems=[...items,newItem]
    onItemFormSubmit(newItems)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={add} onChange={(e)=>setAdd(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
