import React from "react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function Question({ id, title, info, activeId, toggleQuestion }) {
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}

export default Question;
