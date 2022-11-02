import React from "react";

export default function WeatherForecastDay(props) {
  function getDate() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function getDayTemperature() {
    let dayTemperature = props.data.temperature.day;
    let roundedTemperature = Math.round(dayTemperature);
    return roundedTemperature;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{getDate()}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {getDayTemperature()}°C
        </h6>
        <p className="card-text">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          />
        </p>
      </div>
    </div>
  );
}
