import React, { useState } from "react";
import axios from "axios";

import Break from "./Break.js";
import Footer from "./Footer.js";

import FormattedDate from "./FormattedDate.js";

export default function Container() {
  const [ready, setReady] = useState(false);

  let placeholder = "Toronto";

  const [city, setCity] = useState(placeholder);

  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time),
    });

    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setReady(false);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="search col-5">
          <form onSubmit={handleSubmit}>
            <input name="city" placeholder="🔎 Search" onChange={changeCity} />
            <input type="submit" id="submit" />
          </form>
        </div>
        <header>
          <br />

          <h1 className="city">{city}</h1>
          <br />
          <div className="currentLocation">
            <button className="location">Current Location</button>
          </div>
        </header>
        <section>
          <div className="temp">
            <img
              className="today"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
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
            <FormattedDate date={weatherData.date} />

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
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return <div>Loading...</div>;
}
