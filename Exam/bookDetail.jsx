import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
