import React from "react";
import qnas from "./data";
import Question from "./Question";

const Questions = () => {
  return (
    <>
      {qnas.map((qna) => {
        const { id, question, answer } = qna;

        return (
          <>
            <div className="qna scrollbar-hidden" key={id}>
              <Question question={question} answer={answer} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Questions;
