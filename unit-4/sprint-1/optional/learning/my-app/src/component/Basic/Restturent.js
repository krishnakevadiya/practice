import React from 'react'
import "./Resturent.css"
const Restturent = () => {
  return (
    <>
     <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author  subtle'>Breakfast</span>
                <h1 className='card-title'>Maggi</h1>
                <span className='card-description  subtle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eos sunt quae libero a, velit sed accusantium expedita quia, eligendi molestiae repellat quasi unde ullam incidunt architecto iusto temporibus? Culpa?</span>
                <div className='card-read'>Read</div>
                
            
            </div>
            
            <img src={image} alt="images" className='card-media'/>
            <span className='card-tag subtle'>order now</span>
        
        </div>
     </div>
    </>
  )
}

export default Restturent
