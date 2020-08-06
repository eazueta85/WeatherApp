import React, { useContext } from "react";
import dayjs from "dayjs";
import Temp from "../../library/utils/convertions";
import WeatherCard from "./WeatherCard";
import { WeatherContext } from "../../context/WeatherContext";
import WeatterWraper from "./Weather.style";

const Weather = () => {
  const { weatherData, forecastDaysData } = useContext(WeatherContext);
  const { name, main, weather, sys } = weatherData;
  const imgURL = "https://openweathermap.org/img/wn/";
  const dateNow = dayjs(new Date());

  return (
    <>
      {Object.entries(weatherData).length ? (
        <WeatterWraper>
          <div className="Weatter__Box">
            <h1>
              {name}, {sys.country}
            </h1>
            <small>{dateNow.$d.toString()}</small>
            <div className="Weatter__Info">
              <img src={`${imgURL}${weather[0].icon}@2x.png`} alt="" />
              <div className="temp">
                {Temp(main.temp)}
                <span> &#x2103; </span>
              </div>
            </div>
            <small className="Temp__Min__Max"> {Temp(main.temp_min)}&deg; / {Temp(main.temp_max)}&deg;</small>
          </div>
          <hr />
          <div className="Weather__Card">
            {forecastDaysData.map((item) => (
              <WeatherCard
                key={item.dt}
                icon={item.weather[0].icon}
                day={dayjs(item.dt_txt).format("dddd")}
                temp_min={Temp(item.main.temp_min)}
                temp_max={Temp(item.main.temp_max)}
              />
            ))}
          </div>
        </WeatterWraper>
      ) : null}
    </>
  );
};

export default Weather;
