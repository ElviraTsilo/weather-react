import React from "react";

export default function WeatherForecast() {
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

        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tue 31th</h5>
              <h6 class="card-subtitle mb-2 text-muted">+23°C</h6>
              <p class="card-text">&#x1F31E;</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Wed 1st</h5>
              <h6 class="card-subtitle mb-2 text-muted">+24°C</h6>
              <p class="card-text">&#x1F31E;</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Thu 2nd</h5>
              <h6 class="card-subtitle mb-2 text-muted">+25°C</h6>
              <p class="card-text">&#127783;</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Fri 3rd</h5>
              <h6 class="card-subtitle mb-2 text-muted">+27°C</h6>
              <p class="card-text">&#9928;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
