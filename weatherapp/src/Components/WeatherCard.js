import React,{useState ,useEffect} from "react";
import "./weathercard.css";

function WeatherCard({  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) {
  // console.log(name)

 // converting the seconds into time
 let sec = sunset;
 let date = new Date(sec * 1000);
 let timeStr = `${date.getHours()}:${date.getMinutes()}`;

 const [weatherState, setWeatheState] = useState("");

   useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood])
  return (
    <div className="weather_card">
      <div className="weatherIcon">
        <i className={`wi ${weatherState} main_wi`}></i>
      </div>
      <div className="weather_card_details">
      <div className="weatherInfo">
        <div className="weatherTemp">
          <span>{temp}&deg;</span>
        </div>
        <div className="temp_place_info">
          <div className="weather-condition">{weathermood}</div>
          <div className="weather-place">{name},{country}</div>
        </div>
        </div>
        <div className="dateDetails">
        <div className="date"> {new Date().toLocaleString()} </div>
        </div>
      </div>

      <div className="extra_weather_details">
        <div className="sunsetTime_details">
          <div className="weather-sunset_icon">
          <i className={"wi wi-sunset"}></i>
          </div>
          <div className="sunset">
            <div className="sunsetTime">  {timeStr} PM  
            </div>  
            <div>Sunset</div>

          </div>
        </div>

        <div className="sunsetTime_details">
          <div className="weather-sunset_icon">
            <i className={"wi wi-humidity"}></i>
          </div>
          <div className="sunset">
            <div className="sunsetTime" > {humidity}</div>
            <div>Humidity</div>
          </div>
        </div>

        <div className="sunsetTime_details">
          <div className="weather-sunset_icon">
            <i className="wi wi-rain"></i>
          </div>
          <div className="sunset">
            <div className="sunsetTime">{pressure}</div>
            <div>Pressure</div>
          </div>
        </div>

        <div className="sunsetTime_details">
          <div className="weather-sunset_icon">
            <i className="wi  wi-strong-wind"></i>
          </div>
          <div className="sunset">
            <div className="sunsetTime">{speed}</div>
            <div>Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
