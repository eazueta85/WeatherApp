import React from "react";
import Home from "./container/Home/Home";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
