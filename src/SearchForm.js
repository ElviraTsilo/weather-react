import React from "react";
import "./App.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-6">
            <div className="form-group form-group-warning">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your city"
                id="city-input"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <input
                type="submit"
                id="current-button"
                className="btn btn-primary"
                value="Current"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
