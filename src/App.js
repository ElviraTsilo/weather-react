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
    </div>
  );
}
