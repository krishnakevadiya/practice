import {useState} from 'react'

import {PropTypes } from 'prop-types'
import React from "react"
const Pin = ({length}) => {
const[inputBoxLength]=useState(new Array(length).fill(""))

    return (
    <div>
      {new Array(length).fill("w").map((item,index)=>{
        return<input key={index}/>
      })}
    </div>
  )
}

export default Pin;
Pin.prototypes=
{length :PropTypes.number.isRequired,
maxLength:PropTypes.number,
}