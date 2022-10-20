import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
        <div className="row">
          <h1>{props.data.city}</h1>
          <h2 id="date">
            <CurrentDate date={props.data.date} />
          </h2>
          <div className="row">
            <div className="col-6">
              <div className="temperature-container">
                <img
                  src={props.data.image}
                  alt={props.data.description}
                  id="icon"
                />
                <span id="temperature">{props.data.temperature}</span>
                <span className="units">°C</span>
                <div id="description">{props.data.description}</div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li className="humidity">Humidity: {props.data.humidity}%</li>
                <li className="wind">Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
