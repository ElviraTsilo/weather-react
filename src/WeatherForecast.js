import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(null);
  function handleRespons(response) {
    setWeatherForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row days-row">
          <div className="col">
            <WeatherForecastDay data={weatherForecast[0]}/>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "tfbadccdc2af22cbfee54o9361e05613";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleRespons);

    return null;
  }
}
