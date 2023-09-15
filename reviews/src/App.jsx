import { useState } from "react";
import data from "./data";
import "./App.css";
import { BsArrowLeftCircle, BsArrowRightCircle, BsQuote } from "react-icons/bs";

function App() {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = data[index];

  // const checkNumber = (number) => {
  //   if (number > data.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return data.length - 1;
  //   }
  //   return number;
  // };
  // const prevPerson = () => {
  //   setIndex(() => {
  //     const newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const nextPerson = () => {
  //   setIndex(() => {
  //     const newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * data.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   setIndex(checkNumber(randomNumber));
  // };
  // in this button you don't need checknumber function
  const prevPerson = () => {
    setIndex(() => {
      const newIndex = (index - 1 + data.length) % data.length;
      return newIndex;
    });
  };
  const nextPerson = () => {
    setIndex(() => {
      const newIndex = (index + 1) % data.length;
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % data.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <BsQuote />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <button className="prev-btn" onClick={prevPerson}>
          <BsArrowLeftCircle />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <BsArrowRightCircle />
        </button>
        <br />
        <button className="random-btn" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
}

export default App;
