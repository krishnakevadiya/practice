// import styles from "./RestaurantCard.module.css"
function RestaurantCard(props) {
  const {name, type, image,rating, number_of_votes, price_starts_from}=props
  // className={styles.container}
  return (
  <div data-testid="restaurant-card" >
    <p data-testid="restaurant-card-name" >{name}</p>
    <p data-testid="restaurant-card-type" >{type}</p>
    <img data-testid="restaurant-card-image" src={image} alt="" />
    <p data-testid="restaurant-card-rating" >{rating}</p>
    <p data-testid = "restaurant-card-votes" >{number_of_votes}</p>
    <p data-testid = "restaurant-card-price" >{price_starts_from}</p>
    </div>
  );
}

export default RestaurantCard;