import React from "react";
import DayCardWrapper from "./DayCard.style";
const imgURL = "https://openweathermap.org/img/wn/";

const DayHourly = ({ icon, hour, day, temp_min, temp_max }) => {
  return (
    <DayCardWrapper>
      <div>
        <h3>{hour}</h3>
        <img src={`${imgURL}${icon}@2x.png`} alt="" />
        <p>{day}</p>
        <p>
          {temp_min}&deg; / {temp_max}&deg;
        </p>
      </div>
    </DayCardWrapper>
  );
};

export default DayHourly;
