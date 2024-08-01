import React, { useState } from "react";
import TodoItem from "./TodoItem"
import Form from "./Form";

function App() {

  const [itemList, setItemList] = useState([])

 
  function addItem(newItem) {
      setItemList(prevValue => {
        return[
          ...prevValue,
          newItem
        ]
      })
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
      <Form 
      onAdd={addItem}/>
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
