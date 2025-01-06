import React from "react";
import Dashboard from "./dashbord/Dashboard";
import { WeatherProvider } from "./weatherContext/WeatherContex";
import { ThemeProvider } from "./themeContext/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <WeatherProvider>
          <Dashboard />
        </WeatherProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
