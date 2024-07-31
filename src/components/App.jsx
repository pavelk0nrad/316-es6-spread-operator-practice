import React, { useState } from "react";
import TodoItem from "./TodoItem"

function App() {

  const [newItem, setItem] = useState("")
  const [itemList, setItemList] = useState([])

  function changeHandler(event){

    const value =  event.target.value;

    setItem(value)
  

    console.log(value)
    }

  function addItem() {
      setItemList(prevValue => {
        return[
          ...prevValue,
          newItem
        ]
      })
      setItem("")
  }

  function deleteItem(id){
    setItemList((prevItems)=>{
      return prevItems.filter(
        (item, index) =>{
          return index !== id
        }
      )
    })
  }
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} value={newItem} />
        <button onClick={addItem}>
          <span>add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((items, index) =>  
            <TodoItem 
              key={index}
              id={index}
              text={items}
              onChecked={deleteItem} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
