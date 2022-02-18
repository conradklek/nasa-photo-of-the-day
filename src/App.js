import React, { useState } from "react";
import axios from "axios";
import "./assets/main.css";

function App() {
  const [data, setData] = useState([]);
  const getDataFromDate = (date) => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=3qgy7RNMMouhfSQAkdQJCEkyGWQOeTEiX6Jl2ZV6&date=${date}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Set Date:</h1>
        <div>
          <input
            type="date"
            onChange={(e) => {
              getDataFromDate(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
      </header>
      <section>
        <h1>{data.title}</h1>
        <i>{data.date}</i>
        <p>{data.explanation}</p>
      </section>
      <main>
        <img src={data.url} alt={data.title} />
      </main>
    </div>
  );
}

export default App;
