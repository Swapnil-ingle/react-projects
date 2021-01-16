import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    imgSrc: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
    title: "IKIGAI",
    author: "Héctor García and Francesc Miralles",
  },
  {
    id: 2,
    imgSrc: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg",
    title: "Think Like A Monk",
    author: "Jay Shetty",
  },
  {
    id: 3,
    imgSrc: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const book = props.book;
  return (
    <article className="book">
      <img src={book.imgSrc} alt="book-cover" />
      <h1>{book.title}</h1>
      <section>
        <small>by</small>
        <h3>{book.author}</h3>
      </section>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
