import React from "react";
import "./App.css";
import Temperature from "./Temperature";
import SearchForm from "./SearchForm";

function App() {
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

export default App;
