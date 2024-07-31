import React, { useState } from "react";

const isDoneItem = {textDecoration: "line-through"}

function TodoItem(props){

    const [isDone, setIsDone] = useState(false);

    function isDoneHandler(){
        setIsDone(prevValue => {
            return !prevValue
        })
        // if (isDone == false){
        // setIsDone(true)
        // } else{setIsDone(false)

        // }   
    }

    return(
    
    <li onClick={isDoneHandler} style={isDone ? isDoneItem : null}> {props.text} </li>
    
    )
}

export default TodoItem