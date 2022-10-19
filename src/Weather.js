import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

export default function Weather(props) {
  const [weather, setWeather] = useState("null");
  const [ready, setReady] = useState(false);
  function displayTemperature(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <h1>{props.city}</h1>
            <h2 id="date">Sunday 12:09</h2>
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
                  <li className="wind">Wind: {weather.wind}km/h</li>
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
    let apiKey = "fa2a49395aed41c446ad27757ee747da";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading...";
  }
}
