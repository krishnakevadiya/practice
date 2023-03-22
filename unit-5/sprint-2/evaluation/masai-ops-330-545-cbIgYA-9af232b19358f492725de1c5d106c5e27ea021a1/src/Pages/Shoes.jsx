import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import Filter from "../Components/Filter";
import { getShoes } from "../Redux/AppReducer/action";
// import { store } from "../Redux/store";
import SingleShoe from "./SingleShoe";
import styled from 'styled-components';
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  const shoes= useSelector((store)=>store.AppReducer.shoes);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams]= useSearchParams();
  useEffect(()=>{
    if(location || shoes.length===0){
      const getShoesParams = {
        params: {
          category: searchParams.getAll('category')
        }
      }
      dispatch(getShoes(getShoesParams))
    }
  },[shoes.length, dispatch,location.search])
  return (
    <div>
    <ShoesPageWrapper>
    <FilterWrapper>
      <Filter />
      </FilterWrapper>
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
     {
      shoes.length>0 && shoes.map(SingleShoe=>{
        return (
          <ShoesWrappers>
          <div>
            <ShoeCard shoeId= {SingleShoe}/>
          </div>
          </ShoesWrappers>
        )
      })
     }
      </div>
      </ShoesPageWrapper>
    </div>
  );
};
const ShoesWrappers= styled.div`
border: 1px solid blue;
width:300px;
`
const ShoesPageWrapper = styled.div `
border: 1px solid red;
display:flex;
`
const FilterWrapper= styled.div `
border: 1px solid green;
width: 300px;
`
export default Shoes;