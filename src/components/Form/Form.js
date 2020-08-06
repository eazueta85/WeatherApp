import React, { useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import FormWrapper from "./Form.style";

const Form = () => {
  const [citySearch, setCitySearch] = useState("");
  const { setCity, setSearch } = useContext(WeatherContext);

  const handleChange = (e) => {
    setCitySearch({
      ...citySearch,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(citySearch);
    setSearch(true);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Enter city name"
        onChange={handleChange}
      />
      <input type="submit" className="button" value="Search" />
    </FormWrapper>
  );
};

export default Form;
