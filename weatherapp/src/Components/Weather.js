import React, { useState,useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";
function Weather() {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});
  // let data;
  const getWeatherDetails = async () => {
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f7e2483816e82a15ba12fd09acc3def4`;

    let res = await fetch(url);
    let data = await res.json();
    //  console.log(data);
    setTempInfo(data);

    const { temp, humidity, pressure } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;

    const myNewWeatherInfo = {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset,
    };

    setTempInfo(myNewWeatherInfo);
  }
  catch (error) {
    console.log(error);
  }

    //  const myNewWeatherInfo = {
    //   temp,
    //   humidity,
    //   pressure,
    //   weathermood,
    //   name,
    //   speed,
    //   country,
    //   sunset,
    // };
  };
  useEffect(() => {
    getWeatherDetails();
  }, []);
  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="search-field"
          />
          <button
            className="searchBtn"
            type="button"
            onClick={getWeatherDetails}
          >
            Search
          </button>
        </div>
      </div>

      {/* weather card */}
      <WeatherCard {...tempInfo} />
    </>
  );
}

export default Weather;
