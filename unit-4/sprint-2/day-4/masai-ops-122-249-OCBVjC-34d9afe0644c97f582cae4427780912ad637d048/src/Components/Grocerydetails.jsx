import React from 'react';
import data from "../data.json"
import GroceryItem from './GroceryItem';

const Grocerydetails = () => {
    return (
        <>
        <div>
            <h1>Groceries</h1>
            {
               data.map(data=>{
                return(
                   
                    <GroceryItem
                    key={data.id}
                    imgUrl={data.imgURL}
                    title={data.title}
                    mrp={data.mrp}
                    sellingprice={data.sellingPrice}
                    
                    />
                )

               })
            }
            
        </div>
        </>
    );
}

export default Grocerydetails;
