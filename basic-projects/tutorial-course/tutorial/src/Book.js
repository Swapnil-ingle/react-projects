import React from "react";

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
      <button onClick={clickHandlerFunction}>Click Me!</button>
      <button onClick={() => clickHandlerComplexExampleFunction(book.author)}>
        Complex Example!
      </button>
    </article>
  );
};

function clickHandlerComplexExampleFunction(author) {
  console.log(author);
}

function clickHandlerFunction(e) {
  alert("Click Handler Function!");
  console.log(e.target);
}

export default Book;
