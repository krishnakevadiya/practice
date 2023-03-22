import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <Link to={`/books/${book.id}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
          alt="book_cover"
          width="100%"
        />
      </Link>
      <h3>{book.book_name}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Year: {book.release_year}</p>
      <Link to={`/books/${book.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
