import styles from "./RestaurantCard.css"


function RestaurantCard(props) {
  const {name, type, image,rating, number_of_votes, price_starts_from}=props
  // className={styles.container}
  return (

    
<div id ="container">
  <div data-testid="restaurant-card" >

    <img data-testid="restaurant-card-image" src={image}/>
    <p data-testid="restaurant-card-name" >{name}</p>

    <p data-testid="restaurant-card-type" >{type}</p>

    <p data-testid = "restaurant-card-price" >{price_starts_from}</p>
  
    <p data-testid="restaurant-card-rating" >{rating}</p>

    <p data-testid = "restaurant-card-votes" >{number_of_votes}</p>



  {/* // append data here */}
  </div>
    </div>


    );


}

export default RestaurantCard;