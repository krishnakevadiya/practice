// Your code goes here
// do a default export
import React from 'react'


export default function UserCard() {
    const [Text,setText]=React.useState("Follow")
    const fun=()=>{
        if(Text=="Follow"){
            setText("Following");

        }else{
            setText("Follow")
        }
    }
  return (
    <div>
        <button onClick={fun}>
        {Text}
        </button>
    </div>
    
  )
}

