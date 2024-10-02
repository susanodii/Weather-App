import { Typography } from "@mui/material";
import React from "react";

const Cards = () => {
  return (
    <div className='flex flex-col  justify-start mt-[3rem] border border-black'>
      <section className='flex justify-around border border-red'>
        <div className='w-[510px] h-[330px] bg-[#D9D9D9] rounded-3xl flex flex-col items-center justify-center font-poppins'>
          <p className='text-[36px] font-bold leading-[54px] font-poppins '>
            Athens
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
              24°C
            </div>
            <div className='flex justify-start items-center gap-2'>
              <p className='text-[20px] font-semibold leading-[30px] font-poppins'>
                Feels like:
              </p>
              <p className='text-[32px] font-semibold leading-[48px] font-poppins'>
                22°C
              </p>
            </div>
            {/* second */}
            <div className='flex flex-col gap-4'>
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
          <div className=''>
            <img src='assets/clear 1.png' alt='sun' />
          </div>
          <div></div>
        </div>
      </section>

      <section className='flex justify-between'></section>
    </div>
  );
};

export default Cards;
