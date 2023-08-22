import React, { useState } from "react";
import "./WeatherApp.css";

import searchIcon from "../Asset/search.png";
import cloudIcon from "../Asset/cloud.png";
import windIcon from "../Asset/wind.png";
import humidityIcon from "../Asset/humidity.png";
import noDataIcon from "../Asset/noData.png";

const WeatherApp = () => {
  //adding the api to fetch the weather data
  const api_key = "291faa383342705eab54e84a99667849";

  const [cityInput, setCityInput] = useState(""); // State to track input
  const [weatherData, setWeatherData] = useState(null);

  //creating a search function for our search bar/ button;
  const fetchWeatherData = async () => {
    if (cityInput === "") {
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSearch = async () => {
    await fetchWeatherData();
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={cityInput} // Bind input value to state
          onChange={(e) => setCityInput(e.target.value)} // Update input state on change
        />
        <div className="search-icon" onClick={handleSearch}>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      {cityInput === "" ? (
        <div className="message">
          <img src={noDataIcon} alt="noData" className="no-data-found"/>
          <p>Please search for a location!</p>
          </div>
      ) : (
      weatherData && (
        <>
          <div className="weather-image">
            <img src={cloudIcon} alt="" />
          </div>
          <div className="weather-temp">{weatherData.main.temp}°C</div>
          <div className="weather-location">{weatherData.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidityIcon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percentage">
                  {weatherData.main.humidity}%
                </div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={windIcon} alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">{weatherData.wind.speed}km/hr</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )
      )}
    </div>
  );
};

export default WeatherApp;
