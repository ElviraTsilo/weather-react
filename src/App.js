import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Temperature from "./Temperature";
import SearchForm from "./SearchForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Kyiv</h1>
          <h2 id="date">Sunday 12:09</h2>
          <Temperature />
        </div>
        <SearchForm />
      </div>
      <footer>
        This project was coded by Elvira Tsilo and is {" "}
        <a
          href="https://github.com/ElviraTsilo/weather-react/tree/master/src"
          target="_blanck"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub {" "}
        </a>
        and {" "}
        <a
          href="https://gleeful-liger-d9d4fa.netlify.app/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
