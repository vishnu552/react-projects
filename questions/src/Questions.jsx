import React from "react";
import Question from "./Question";

function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section className="container">
      <h3>Questions</h3>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
