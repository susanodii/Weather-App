import React from "react";
import Dashboard from "./dashbord/Dashboard";
import { WeatherProvider } from "./weatherContext/WeatherContex";

const App = () => {
  return (
    <>
      <WeatherProvider>
        <Dashboard />
      </WeatherProvider>
    </>
  );
};

export default App;
