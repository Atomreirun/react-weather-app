import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by Arlene Runyon and is{" "}
          <a
            href="https://github.com/Atomreirun/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github and hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
