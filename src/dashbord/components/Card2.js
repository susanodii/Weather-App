import { Typography } from "@mui/material";
import React from "react";

const Card2 = ({ dailyForcast }) => {
  // const dailyFocast = [
  //   {
  //     image: "assets/clouds 1.png",

  //     temp: "20°C",
  //     day: "Friday, 1 September",
  //   },

  //   {
  //     image: "assets/clouds 1.png",

  //     temp: "22°C",
  //     day: "Saturday, 2 September",
  //   },

  //   {
  //     image: "assets/clouds 1.png",

  //     temp: "25°C",
  //     day: "Sunday, 3 September",
  //   },

  //   {
  //     image: "assets/clouds 1.png",

  //     temp: "21°C",
  //     day: "Monday, 4 September",
  //   },

  //   {
  //     image: "assets/clouds 1.png",

  //     temp: "20°C",
  //     day: "Tuesday, 5 September",
  //   },
  // ];

  const formatDailyForecast = () => {
    return dailyForcast?.list?.slice(0, 5)?.map((forecast) => {
      const date = new Date(forecast.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      return {
        image: "assets/clouds 1.png",

        temp: `${Math.round(forecast.main.temp)}°C`,
        day: dayName,
      };
    });
  };

  const formattedDailyFocast = formatDailyForecast();

  const hourlyFocast = [
    {
      sunImage: "assets/clear 3.png",
      navImage: "assets/navigation 1.png",
      time: "12:00",

      temp: "26°C",
      distance: "3km/h",
    },
    {
      sunImage: "assets/clear 3.png",
      navImage: "assets/navigation 1.png",
      time: "12:00",

      temp: "26°C",
      distance: "3km/h",
    },

    {
      sunImage: "assets/clear 3.png",
      navImage: "assets/navigation 1.png",
      time: "12:00",

      temp: "26°C",
      distance: "3km/h",
    },
    {
      sunImage: "assets/clear 3.png",
      navImage: "assets/navigation 1.png",
      time: "12:00",

      temp: "26°C",
      distance: "3km/h",
    },
    {
      sunImage: "assets/clear 3.png",
      navImage: "assets/navigation 1.png",
      time: "12:00",

      temp: "26°C",
      distance: "3km/h",
    },
  ];

  return (
    <section className='flex flex-col gap-10 justify-around md:flex-row md:gap-0 '>
      <div className='w-full max-w-[500px] h-auto bg-[#D9D9D9] rounded-3xl font-poppins p-4 sm:p-6 mx-auto max-w-4xl'>
        <p className='text-lg sm:text-2xl lg:text-[32px] font-extrabold leading-tight lg:leading-[48px] mb-4 text-center'>
          3 Hours Forecast:
        </p>
        <div className='space-y-4'>
          {formattedDailyFocast?.map((focast, index) => (
            <div
              className='flex flex-col sm:flex-row justify-start items-center gap-4 p-4 shadow-sm bg-white rounded-lg'
              key={index}
            >
              <div>
                <img
                  src={focast.image}
                  className='w-12 sm:w-16'
                  alt='forecast-icon'
                />
              </div>
              <p className='text-base sm:text-lg md:text-[26px] font-extrabold leading-tight'>
                {focast.temp}
              </p>
              <p className='text-sm sm:text-base md:text-[20px] font-extrabold leading-tight'>
                {focast.day}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* second card */}

      <div className=' h-auto w-full max-w-[870px]   bg-[#D9D9D9] rounded-3xl font-poppins mx-auto flex flex-col justify-center'>
        <p className='text-[32px] font-extrabold leading-[48px] font-poppins mt-3 text-center'>
          {" "}
          Hourly Forecast:
        </p>
        <div>
          <div className=' flex  flex-row flex-wrap justify-around'>
            {hourlyFocast.map((focast, index) => (
              <div className=' ' key={index}>
                <div
                  className={`w-[130px] h-[270px]  rounded-full flex flex-col justify-center items-center ${
                    index < 3
                      ? "bg-gradient-to-b from-[#F88508] to-[#F6FAD900]"
                      : "bg-gradient-to-b from-[#443D64] to-[#6582C600]"
                  }`}
                >
                  <p className='text-[24px] font-extrabold leading-[36px] font-poppins'>
                    {" "}
                    {focast.time}
                  </p>
                  <img src={focast.sunImage} alt='sun' width={70} />
                  <p className='text-[20px] font-extrabold leading-[30px] font-poppins'>
                    {" "}
                    {focast.temp}
                  </p>
                  <img src={focast.navImage} alt='sun' width={70} />
                  <p className='text-[20px] font-extrabold leading-[30px] font-poppins'>
                    {" "}
                    {focast.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
