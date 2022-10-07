import React from "react";
import "./App.css";
import Humidity from "./Humidity";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="temperature-container">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather"
              id="icon"
            />
            <strong id="temperature"></strong>
            <span className="units">14°C</span>
            <div id="description">Sunny</div>
          </div>
        </div>
        <div className="col-6">
          <Humidity />
        </div>
      </div>
    </div>
  );
}
