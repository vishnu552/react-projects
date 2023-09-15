import axios from "axios";
import { useEffect, useState } from "react";
function FirstApiCall() {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios(
  //         "https://course-api.com/react-store-products"
  //       );
  //       console.log("response", response);
  //     } catch (error) {
  //       console.log("error", error.response);
  //     }
  //   };
  //  const fetchJoke = async () => {
  //     try {
  //       const response = await axios("https://icanhazdadjoke.com/", {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       });
  //       console.log("response", response.data);
  //     } catch (error) {
  //       console.log("error", error.response);
  //     }
  //   };
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://course-api.com/axios-tutorial-post",
        { name, email }
      );
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error.response);
    }
  };
  useEffect(() => {
    // fetchData();
    // fetchJoke();
  }, []);

  return (
    <>
      <label>Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email : </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
}

export default FirstApiCall;
