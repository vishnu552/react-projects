import React from "react";
import Tour from "./Tour";
import Loading from "./Loading";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
