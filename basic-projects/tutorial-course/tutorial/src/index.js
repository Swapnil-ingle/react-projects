import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "IKIGAI";
  const author = "Héctor García and Francesc Miralles";
  return (
    <article className="book">
      <h1>{title}</h1>
      <img
        src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
        alt="book-cover"
      />
      <section>
        <small>by</small>
        <h3>{author}</h3>
      </section>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
