import { Typography } from "@mui/material";
import React from "react";

const Card2 = () => {
  const FocastData = [
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

  return (
    <section className='flex justify-between'>
      <div className='w-[414px] h-[366px] bg-[#D9D9D9] rounded-3xl font-poppins'>
        <p className='text-[32px] font-extrabold leading-[48px] font-poppins mt-3 text-center'>
          {" "}
          5 Days Forecast:
        </p>
        <div>
          {FocastData.map((focast, index) => (
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
    </section>
  );
};

export default Card2;
