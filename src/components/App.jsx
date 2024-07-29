import React, { useState } from "react";

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
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} />
        <button onClick={addItem}>
          <span>add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map(items =>  <li> {items} </li>  )}
        </ul>
      </div>
    </div>
  );
}

export default App;
