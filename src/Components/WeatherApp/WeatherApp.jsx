import React from "react";
import "./WeatherApp.css";

import searchIcon from "../Asset/search.png";
import clearIcon from "../Asset/clear.png";
import cloudIcon from "../Asset/cloud.png";
import drizzleIcon from "../Asset/drizzle.png";
import rainIcon from "../Asset/rain.png";
import snowIcon from "../Asset/snow.png";
import windIcon from "../Asset/wind.png";
import humidityIcon from "../Asset/humidity.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloudIcon} alt="" />
      </div>
      <div className="weather-temp">
        24°C
      </div>
      <div className="weather-location">Delhi</div>
      <div className="data-container">
        <div className="element">
            <img src={humidityIcon} alt="" classname="icon"/>
            <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={windIcon} alt="" classname="icon"/>
            <div className="data">
                <div className="humidity-percentage">18km/hr</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
