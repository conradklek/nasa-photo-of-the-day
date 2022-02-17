import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getDataFromApi = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=3qgy7RNMMouhfSQAkdQJCEkyGWQOeTEiX6Jl2ZV6"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={getDataFromApi}>Get Data</button>
      <div>
        <img src={data.url} alt={data.title} />
        <main>
          <h1>{data.title}</h1>
          <p>{data.explanation}</p>
        </main>
      </div>
    </div>
  );
}

export default App;
