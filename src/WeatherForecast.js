import React from "react";
export default function WeatherForecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2 forecast-column">
          <p className="forecast-day">Tues</p>
          <img
            className="forecast-icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          ></img>
          <p className="forecast-temp"></p>
        </div>
      </div>
    </div>
  );
}
