import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     try {
  //       fetch("https://api.github.com/users/vishnu552")
  //         .then((response) => response.json())
  //         .then((data) => setData(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);
  //   console.log(data);
  return (
    <div className="bg-orange-200 text-gray-800 p-4 w-72">
      <img src={data.avatar_url} alt={data.name} className="w-40 rounded-sm" />
      <div>
        <a href={data.html_url} target="_blank" className="text-xl">
          {data.name}
        </a>
        <p className="text-gray-500 text-xm">{data.bio}</p>
      </div>
    </div>
  );
}

export default Github;
export const githubLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/vishnu552");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
