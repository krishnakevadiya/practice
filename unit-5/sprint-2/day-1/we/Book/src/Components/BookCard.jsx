import React from 'react'

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.ckTfMW6xnIGMls7l-mukkAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="book cover" width="50%" />

      </div>
      <div>{bookData.book_name}</div>
      <div>{bookData.category}</div>
      <div>{bookData.release_year}</div>
    </div>
  )
}

export default BookCard
