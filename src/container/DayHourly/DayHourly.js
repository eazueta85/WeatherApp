import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import DayHourlyCard from "../../components/DayHourly/DayHourlyCard";
import Temp from "../../library/utils/convertions";
import { WeatherContext } from "../../context/WeatherContext";
import DayWraper from "./DayHourly.style";

const DayHourly = () => {
  const { id } = useParams();
  const { forecastHourlyData } = useContext(WeatherContext);

  const filterDay = forecastHourlyData.filter(
    (item) => dayjs(item.dt_txt).format("dddd") === id.toString()
  );

  return (
    <DayWraper>
      <h1>{id}</h1>
      {filterDay.map((item) => (
        <DayHourlyCard
          key={item.dt}
          icon={item.weather[0].icon}
          hour={dayjs(item.dt_txt).format("HH:mm")}
          day={dayjs(item.dt_txt).format("dddd")}
          temp_min={Temp(item.main.temp_min)}
          temp_max={Temp(item.main.temp_max)}
        />
      ))}
    </DayWraper>
  );
};

export default DayHourly;
