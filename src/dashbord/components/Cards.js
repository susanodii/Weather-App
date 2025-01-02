import { Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import WeatherContext from "../../weatherContext/WeatherContex";

import Card2 from "./Card2";
const Cards = () => {
  const { city } = useContext(WeatherContext);

  // const {
  //   name,
  //   // main: { temp, feels_like, humidity, pressure },
  //   weather,
  //   wind,
  //   // sys: { sunrise, sunset },
  // } = city;
  console.log(city);
  return (
    <div className='flex flex-col  justify-start mt-[3rem] gap-[2rem] p-6'>
      <section className='flex justify-around '>
        <div className='w-[510px] h-[330px] bg-[#D9D9D9] rounded-3xl flex flex-col items-center justify-center font-poppins'>
          <p className='text-[36px] font-bold leading-[54px] font-poppins '>
            {city.name}
          </p>
          <p className='text-[96px] font-bold leading-[144px] font-poppins '>
            09:03
          </p>
          <p className='text-[20px] font-bold leading-[30px] font-poppins '>
            Thursday, 31 Aug
          </p>
        </div>

        <div className='w-[780px] h-[330px] bg-[#D9D9D9] rounded-3xl flex justify-between px-4 items-center  font-poppins'>
          <div className='flex flex-col justify-between'>
            <div className='text-[80px] font-extrabold leading-[120px] font-poppins'>
              {" "}
              {Math.floor(city?.main?.temp)}°C
            </div>
            <div className='flex justify-start items-center gap-2'>
              <p className='text-[20px] font-semibold leading-[30px] font-poppins'>
                Feels like:
              </p>
              <p className='text-[32px] font-semibold leading-[48px] font-poppins'>
                {Math.floor(city?.main?.feels_like)}
              </p>
            </div>
            {/* second */}
            <div className='flex flex-col gap-4 '>
              <div className='flex gap-4'>
                {" "}
                <img src='assets/sunrise-white -1.png' />
                <div className='flex flex-col '>
                  <p className='text-[20px] font-extrabold leading-[30px] font-poppins'>
                    Sunrise
                  </p>
                  <p className='text-[16px] font-semibold leading-[24px] font-poppins'>
                    06:37 AM
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                {" "}
                <img src='assets/sunset-white-1.png' />
                <div className='flex flex-col '>
                  <p className='text-[20px] font-extrabold leading-[30px] font-poppins'>
                    Sunset
                  </p>
                  <p className='text-[16px] font-semibold leading-[24px] font-poppins'>
                    20:37 AM
                  </p>
                </div>
              </div>
              {/* <div></div> */}
            </div>
          </div>
          {/* second row in the card */}
          <div className=' flex flex-col justify-around items-center'>
            <img src='assets/clear 1.png' alt='sun' />
            <p className='text-[32px] font-extrabold leading-[48px] font-poppins'>
              {" "}
              {city.weather && city.weather[0]?.description}
            </p>
          </div>

          <div className='flex gap-[2rem]  py-2'>
            <div className=' h-full  flex flex-col gap-4 '>
              <div className='flex flex-col  '>
                <img src='assets/humidity-img.png' alt='sun' width={70} />
                <p className='text-[20px] font-semibold leading-[30px] font-poppins mt-3'>
                  {city.main.humidity}%
                </p>
                <p className='text-[16px] font-medium leading-[24px] font-poppins mt-2'>
                  Humidity
                </p>
              </div>

              <div className='flex flex-col   '>
                <img src='assets/pressure-white 1.png' alt='sun' width={70} />
                <p className='text-[20px] font-semibold leading-[30px] font-poppins'>
                  {city.main.pressure}hpa
                </p>
                <p className='text-[16px] font-medium leading-[24px] font-poppins mt-2'>
                  Presure
                </p>
              </div>
            </div>

            {/*  */}
            <div className='h-full  flex flex-col gap-4'>
              <div className='flex flex-col   '>
                <img src='assets/wind 1.png' alt='sun' width={70} />
                <p className='text-[20px] font-semibold leading-[30px] font-poppins'>
                  {city.wind.speed}km/h
                </p>
                <p className='text-[16px] font-medium leading-[24px] font-poppins mt-2'>
                  Wind Speed
                </p>
              </div>

              <div className='flex flex-col items-center  '>
                <img src='assets/uv-white 1.png' alt='sun' width={70} />
                <p className='text-[20px] font-semibold leading-[30px] font-poppins'>
                  8
                </p>
                <p className='text-[16px] font-medium leading-[24px] font-poppins mt-2'>
                  UV
                </p>
              </div>
              {/* <div></div> */}
            </div>
          </div>
        </div>
      </section>
      <Card2 />
    </div>
  );
};

export default Cards;
