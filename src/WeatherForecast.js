import React from "react";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
  function handleRespons(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiKey = "tfbadccdc2af22cbfee54o9361e05613";
  let unit = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(handleRespons);

  return (
    <div className="WeatherForecast">
      <div class="row days-row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mon 30th</h5>
              <h6 class="card-subtitle mb-2 text-muted">+23°C</h6>
              <p class="card-text">&#9925;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
