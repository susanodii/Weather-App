import WeatherReducer from "./WeatherReducer";
import { createContext, useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";

const WeatherContext = createContext();
const WEATHER_BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;

const openWeather = axios.create({
  baseURL: WEATHER_BASE_URL,
});
export const WeatherProvider = ({ children }) => {
  const initialState = {
    cities: [],
    city: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const setIsLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

  const fetchCity = async (city, units = "metric") => {
    setIsLoading();

    const params = new URLSearchParams({
      q: city,
      appid: process.env.REACT_APP_WEATHER_TOKEN,
      units: units,
    });

    try {
      const res = await openWeather.get(`/weather?${params}`);
      console.log(res.data);
      const data = res.data;
      dispatch({
        type: "SET_CITY",
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        fetchCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
