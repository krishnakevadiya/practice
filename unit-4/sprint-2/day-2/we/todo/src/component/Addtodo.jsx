import React,{useState} from 'react'

export default function Addtodo({handleAddTodo}) {
    const [text,setText] = useState("");

    const onClick = ()=>{
        handleAddTodo(text);
        setText("");
    }
  return (
    <div id="addtodo">
        <input value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="ADD TODO"
         />
         <button onClick={onClick}>+</button>
    </div>
  )
}
