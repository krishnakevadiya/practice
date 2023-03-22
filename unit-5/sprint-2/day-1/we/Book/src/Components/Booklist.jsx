import React ,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SingleBook from '../Pages/SingleBook';
import { getBooks } from '../REDUX/AppData/action';
import BookCard from './BookCard';

import styled from 'styled-components';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
const Booklist = () => {
    const books = useSelector((store)=> store.AppReducer.books);
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    useEffect(()=>{
        if(location || books.length===0){
            const sortBy = searchParams.get('sort');
            const getBooksParams = {
                params: {
                    category: searchParams.getAll('category'),
                    _sort:sortBy && 'release_year',
                    _order:sortBy,
                }
            }
            dispatch(getBooks(getBooksParams))
        }
    },[books.length, dispatch,location.search]);
  return (
    <div>
        {books.length>0&& books.map(SingleBook=>{
            return (
            <BookCardWrapper key={SingleBook.id}>
            <Link to={`/books/${SingleBook.id}`}>
            <BookCard bookData= {SingleBook}/>
            </Link>
            </BookCardWrapper>
            )
        })}
    </div>
  )
}
const BookCardWrapper = styled.div `
width:300px;
border: 1px solid blue;`
export default Booklist