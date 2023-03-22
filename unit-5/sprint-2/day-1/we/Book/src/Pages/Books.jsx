import React from 'react'
import Booklist from '../Components/Booklist';
import FilterCom from '../Components/FilterCom';
import styled from 'styled-components'
const Books = () => {
  return (
    <div>
    
    <BookPageWrapper>
      <FilterWrapper>
      <FilterCom/>
      </FilterWrapper>
      <BookWrapper>
      <Booklist/>
      </BookWrapper>
      </BookPageWrapper>
    </div>
  )
}
const BookPageWrapper = styled.div `
 display:flex;
 border: 1px solid red;
 `;
 

 const FilterWrapper = styled.div `
  width: 300px;
  border:1px solid blue;`;

  const BookWrapper = styled.div `
  width: 100%;
  border: 1px solid green;

  
  ${'' /* display:flex; */}
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap:10px;
  justify-content: center;
  
  `

export default Books
