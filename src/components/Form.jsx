import React, { useState } from "react";




function Form(props){
    const [newItem, setItem] = useState("")

    function changeHandler(event){
        const value =  event.target.value;
        setItem(value)
        }
    
   
    return(
        
<div className="form">
<input type="text" onChange={changeHandler} value={newItem} />
<button onClick={() => {
    props.onAdd(newItem)
    setItem("")
}}>
  <span>add</span>
</button>
</div>
)}

export default Form