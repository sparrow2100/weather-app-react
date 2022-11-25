import React from "react";

export default function Section() {
  return (
    <section>
      <div className="temp">
        <img
          className="today"
          src="http://openweathermap.org/img/wn/10d@2x.png"
        />
        <p className="blackText">
          <span className="temperature tempSpan tempElement" id="temp-element">
            16
          </span>
          <span id="units" className="celsiusUnits">
            °C
          </span>
        </p>

        <p className="celsiusFarenheit">
          <button className="celsius celsiusLink" id="celsius-button">
            C
          </button>
          |
          <button className="farenheit fahrenheitLink" id="fahrenheit-button">
            F
          </button>
        </p>
      </div>
      <br />
      <div className="extraInfo">
        <p className="current">Tuesday, 3:00 PM</p>
        <p className="weather">Cloudy</p>
        <p>
          Wind: <span className="windSpeed">10</span> km/h
        </p>
      </div>
    </section>
  );
}
