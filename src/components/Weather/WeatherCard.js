import React from "react";
import WeatherCardWrapper from "./WeatherCard.style";

const WeatherCard = ({ icon, day, temp_min, temp_max }) => {
  const imgURL = "https://openweathermap.org/img/wn/";
  return (
    <WeatherCardWrapper>
      <div>
        <img src={`${imgURL}${icon}@2x.png`} alt="" />
        <span>{day}</span>
        <span>
          {temp_min}&deg; / {temp_max}&deg;
        </span>
      </div>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
