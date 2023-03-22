import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {transfomTostring} from '../Components/RestaurantCard'

const getrestaurants =(id)=>{
  return fetch(
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  ).then((res)=>res.json());
};

function SingleRestaurantPage() {
  const {id}=useParams();
  const [data, setData]= useState({});
  useEffect(()=>{
    setLoading(true);
    getrestaurants(id)
    .then((res)=>{
      setData(res.data);
      
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
    });
  },[])
  
  return (
    <div data-testid="restaurant-container">
    <img
    src={data.img}
    />
      <div>
        <h3 data-testid="restaurant-name"></h3>
      </div>
      <div data-testid="restaurant-type">Type:</div>
      <div data-testid="restaurant-rating">Rating:</div>
      <div data-testid="restaurant-votes">Votes:</div>
      <div data-testid="restaurant-price">Starting Price:</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;