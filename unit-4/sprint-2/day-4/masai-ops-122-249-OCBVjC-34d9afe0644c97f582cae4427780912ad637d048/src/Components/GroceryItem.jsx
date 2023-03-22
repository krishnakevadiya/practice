import React from 'react'

export default function GroceryItem({title,mrp,sellingprice,imgUrl}) {
    console.log(title)
  return (
    <div className='grocery_card'>
        <img src={imgUrl} alt={title} />
        <h4>{title}</h4>
        <p>{mrp}</p>
        <p>{sellingprice}</p>
    </div>
  )
}
