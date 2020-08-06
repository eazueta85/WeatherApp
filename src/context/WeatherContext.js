import React, { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastDaysData, setforecastDaysData] = useState([]);
  const [forecastHourlyData, setForecastHourlyData] = useState([]);
  const [citySearch, setCity] = useState("");
  const [search, setSearch] = useState(false);
  const { city } = citySearch;
  const WEATHER_API_KEY = "6fd5ccdeea17dbdc2f59d5f2aa4dc7f9";

  useEffect(() => {
    if (search) {
      const getWeather = async () => {
        await axiosClient
          .get(`weather?q=${city}&appid=${WEATHER_API_KEY}`)
          .then((weather) => setWeatherData(weather.data));
      };

      const getForecast = async () => {
        await axiosClient
          .get(`forecast?q=${city}&appid=${WEATHER_API_KEY}`)
          .then((forecast) => {
            const forecastDays = [];
            if (Object.entries(forecast).length) {
              //40 days
              for (let i = 0; i < forecast.data.list.length; i += 8) {
                forecastDays.push(forecast.data.list[i + 5]);
              }
            }
            setforecastDaysData(forecastDays);
            setForecastHourlyData(forecast.data.list);
          });
      };

      getWeather();
      getForecast();
    }
  }, [citySearch]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastDaysData,
        forecastHourlyData,
        setCity,
        setSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
