import WeatherReducer from "./WeatherReducer";
import { createContext, useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";

// import {useState} from "react";

const WeatherContext = createContext();
const WEATHER_BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;

const openWeather = axios.create({
  baseURL: WEATHER_BASE_URL,
  // headers: { Authorization: `token ${WEATHER_TOKEN}` },
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

  const fetchCity = async (city) => {
    setIsLoading();

    const params = new URLSearchParams({
      q: city,
      appid: process.env.REACT_APP_WEATHER_TOKEN,
    });

    try {
      const res = await openWeather.get(`/forecast?${params}`);
      console.log(res.data);

      // dispatch({
      //   type: "GET_CITY",
      //   // payload: items,
      // });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchCity("Lagos"); // Call Lagos as the default city
  }, []);

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
