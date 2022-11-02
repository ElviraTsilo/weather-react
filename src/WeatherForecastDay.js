import React from "react";

export default function WeatherForecastDay(props) {
  function getDate() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            alt= {props.data.condition.description}
          />
        </p>
      </div>
    </div>
  );
}
