// import React from "react";
// import "./WeatherApp.css";

// import searchIcon from "../Asset/search.png";
// import clearIcon from "../Asset/clear.png";
// import cloudIcon from "../Asset/cloud.png";
// import drizzleIcon from "../Asset/drizzle.png";
// import rainIcon from "../Asset/rain.png";
// import snowIcon from "../Asset/snow.png";
// import windIcon from "../Asset/wind.png";
// import humidityIcon from "../Asset/humidity.png";

// const WeatherApp = () => {
    
//     //adding the api to fetch the weather data
//     let api_key = "291faa383342705eab54e84a99667849";

//     //creating a search function for our search bar/ button;
//     const search = async () => {
//       const element = document.getElementsByClassName("cityInput");
//         //if input field is empty then nothing to display/ function not executed
//         if(element[0].value === "") { 
//           return 0
//         }

//         /*logic below for value in put = some city/country name
//           intially the url to get the data from is :- https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=291faa383342705eab54e84a99667849
//           here the city name or place is fixed to London so to change it we use template literal.
//         */
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

//         //for fetching the data from https://openweathermap.org/ we use fetch (async, await)
//         let response = await fetch(url); //stores the data from the site to the response variable
//         let data = await response.json(); 
//         const humidity = document.getElementsByClassName("humidity-percent");
//         const wind = document.getElementsByClassName("wind-rate");
//         const temperature = document.getElementsByClassName('weather-temp');
//         const location = document.getElementsByClassName("weather-location");

//         humidity[0].innerHTML = data.main.humidity;
//         wind[0].innerHTML = data.wind.speed;
//         temperature[0].innerHTML = data.main.temp;
//         location[0].innerHTML = data.name;
//     }

//   return (

//     <div className="container">
//       <div className="top-bar">
//         <input type="text" className="cityInput" placeholder="Search" />
//         <div className="search-icon" onClick={search}>
//           <img src={searchIcon} alt="" />
//         </div>
//       </div>
//       <div className="weather-image">
//         <img src={cloudIcon} alt="" />
//       </div>
//       <div className="weather-temp">
//         24°C
//       </div>
//       <div className="weather-location">London</div>
//       <div className="data-container">
//         <div className="element">
//             <img src={humidityIcon} alt="" classname="icon"/>
//             <div className="data">
//                 <div className="humidity-percentage">64%</div>
//                 <div className="text">Humidity</div>
//             </div>
//         </div>
//         <div className="element">
//             <img src={windIcon} alt="" classname="icon"/>
//             <div className="data">
//                 <div className="wind-rate">18km/hr</div>
//                 <div className="text">Wind Speed</div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
import React, { useState } from "react";
import "./WeatherApp.css";

import searchIcon from "../Asset/search.png";
import cloudIcon from "../Asset/cloud.png";
import windIcon from "../Asset/wind.png";
import humidityIcon from "../Asset/humidity.png";

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
      {weatherData && (
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
      )}
    </div>
  );
};

export default WeatherApp;
