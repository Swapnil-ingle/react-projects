import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const firstBook = {
  imgSrc: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
  title: "IKIGAI",
  author: "Héctor García and Francesc Miralles",
};

const secondBook = {
  imgSrc: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg",
  title: "Think Like A Monk",
  author: "Jay Shetty",
};

function BookList() {
  return (
    <section className="booklist">
      <Book book={firstBook} />
      <Book book={secondBook} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <h1>{props.book.title}</h1>
      <img src={props.book.imgSrc} alt="book-cover" />
      <section>
        <small>by</small>
        <h3>{props.book.author}</h3>
      </section>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
