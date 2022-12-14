import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState("null");
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.city);
  function displayTemperature(response) {
  
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      image: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    setReady(true);
  }
  
  function search() {
    let apiKey = "tfbadccdc2af22cbfee54o9361e05613";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <WeatherInfo data={weather} />
          <form
            onSubmit={handleSubmit}
            className="search-form"
            id="search-form"
          >
            <div className="row">
              <div className="col-9">
                <div className="form-group form-group-warning">
                  <input
                    onChange={handleCityChange}
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
            </div>
          </form>
          <WeatherForecast coordinates={weather.coordinates}/>
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
    search();
    return "Loading...";
  }
}
