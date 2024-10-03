import { Typography } from "@mui/material";
import React from "react";

const Card2 = () => {
  const dailyFocast = [
    {
      image: "assets/clouds 1.png",

      temp: "20°C",
      day: "Friday, 1 September",
    },

    {
      image: "assets/clouds 1.png",

      temp: "22°C",
      day: "Saturday, 2 September",
    },

    {
      image: "assets/clouds 1.png",

      temp: "25°C",
      day: "Sunday, 3 September",
    },

    {
      image: "assets/clouds 1.png",

      temp: "21°C",
      day: "Monday, 4 September",
    },

    {
      image: "assets/clouds 1.png",

      temp: "20°C",
      day: "Tuesday, 5 September",
    },
  ];

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
    <section className='flex justify-around'>
      <div className='w-[414px] h-[366px] bg-[#D9D9D9] rounded-3xl font-poppins'>
        <p className='text-[32px] font-extrabold leading-[48px] font-poppins mt-3 text-center'>
          {" "}
          5 Days Forecast:
        </p>
        <div>
          {dailyFocast.map((focast, index) => (
            <div className='flex justify-around items-center' key={index}>
              <img src={focast.image} width={60} />
              <p className='text-[24px] font-extrabold leading-[36px] font-poppins'>
                {focast.temp}
              </p>
              <p className='text-[20px] font-extrabold leading-[30px] font-poppins'>
                {focast.day}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* second card */}

      <div className='w-[870px] h-[366px] bg-[#D9D9D9] rounded-3xl font-poppins'>
        <p className='text-[32px] font-extrabold leading-[48px] font-poppins mt-3 text-center'>
          {" "}
          Hourly Forecast:
        </p>
        <div>
          <div className=' flex flex-row flex-wrap justify-around'>
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
