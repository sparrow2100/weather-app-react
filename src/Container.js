import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header.js";

import Break from "./Break.js";
import Footer from "./Footer.js";

export default function Container() {
  const [ready, setReady] = useState(false);

  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="search col-5">
          <form>
            <input name="city" placeholder="🔎 Search" />
            <input type="submit" id="submit" />
          </form>
        </div>
        <Header />
        <section>
          <div className="temp">
            <img
              className="today"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
            />
            <p className="blackText">
              <span
                className="temperature tempSpan tempElement"
                id="temp-element"
              >
                {weatherData.temperature}
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
              <button
                className="farenheit fahrenheitLink"
                id="fahrenheit-button"
              >
                F
              </button>
            </p>
          </div>
          <br />
          <div className="extraInfo">
            <p className="current">Tuesday, 3:00 PM</p>
            <p className="weather">{weatherData.description}</p>
            <p>
              Wind: <span className="windSpeed">{weatherData.wind}</span> km/h
            </p>
          </div>
        </section>
        <Break />
        <Footer />
      </div>
    );
  } else {
    const apiKey = "10c51b317a8ab0bof07caft138730412";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Toronto&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <h1>Loading...</h1>;
  }
}
