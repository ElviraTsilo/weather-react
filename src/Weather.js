import React, { useState } from "react";
import CurrentData from "./CurrentData";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

export default function Weather(props) {
  const [weather, setWeather] = useState("null");
  const [ready, setReady] = useState(false);
  function displayTemperature(response) {
    console.log(response.data.wind.speed);
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      image: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <h1>{props.city}</h1>
            <h2 id="date">
              <CurrentData date={weather.date} />
            </h2>
            <div className="row">
              <div className="col-6">
                <div className="temperature-container">
                  <img
                    src={weather.image}
                    alt={weather.description}
                    id="icon"
                  />
                  <span id="temperature">{weather.temperature}</span>
                  <span className="units">°C</span>
                  <div id="description">{weather.description}</div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li className="humidity">Humidity: {weather.humidity}%</li>
                  <li className="wind">Wind: {weather.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
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
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Search"
                  />
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
        <footer>
          This project was coded by Elvira Tsilo and is{" "}
          <a
            href="https://github.com/ElviraTsilo/weather-react/tree/master/src"
            target="_blanck"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and{" "}
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
  } else {
    let apiKey = "tfbadccdc2af22cbfee54o9361e05613";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading...";
  }
}
