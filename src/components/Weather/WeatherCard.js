import React from "react";
import WeatherCardWrapper, { LinkWrapper } from "./WeatherCard.style";

const WeatherCard = ({ icon, day, temp_min, temp_max }) => {
  const imgURL = "https://openweathermap.org/img/wn/";

  return (
    <LinkWrapper to={day}>
      <WeatherCardWrapper>
        <div>
          <img src={`${imgURL}${icon}@2x.png`} alt="" />
          <p>{day}</p>
          <p>
            {temp_min}&deg; / {temp_max}&deg;
          </p>
        </div>
      </WeatherCardWrapper>
    </LinkWrapper>
  );
};

export default WeatherCard;
