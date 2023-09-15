import React, { useState } from "react";

function Tour({ id, image, name, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="IMG" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={() => setReadMore((prev) => !prev)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          onClick={() => {
            removeTour(id);
          }}
          className="btn delete-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
