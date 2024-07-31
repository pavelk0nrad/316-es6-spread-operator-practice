import React, { useState } from "react";

const isDoneItem = {textDecoration: "line-through"}

function TodoItem(props){

    const [isDone, setIsDone] = useState(false);

    function isDoneHandler() {
        setIsDone(true);
        setTimeout(() => {
          props.onChecked(props.id);
        }, 1000); 
      }

    return(
    
    <li onClick={() => {
        isDoneHandler()
    }} style={isDone ? isDoneItem : null}> {props.text} </li>
    
    )
}

export default TodoItem