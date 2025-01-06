import React, { useContext } from "react";
import NavSection from "./components/NavSection";
import Cards from "./components/Cards";
import WeatherContext from "../weatherContext/WeatherContex";

const Dashboard = () => {
  const { city } = useContext(WeatherContext);

  return (
    <>
      <NavSection />
      {/* <Cards /> */}
      {city && city.name && <Cards />}
    </>
  );
};

export default Dashboard;
