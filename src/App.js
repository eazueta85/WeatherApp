import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./container/Home/Home";
import DayHourly from "./container/DayHourly/DayHourly";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <Home />
        <Switch>
          <Route path="/:id" children={<DayHourly />} />
        </Switch>
      </WeatherProvider>
    </Router>
  );
}

export default App;
