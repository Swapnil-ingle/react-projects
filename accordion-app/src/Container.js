import React from "react";
import Questions from "./Questions";

const Container = () => {
  return (
    <div className="container">
      <section className="qna-header">
        <h3>Questions And Answer</h3>
        <span>About Login</span>
      </section>
      <section className="qna-questions scrollbar-hidden">
        <Questions />
      </section>
    </div>
  );
};

export default Container;
