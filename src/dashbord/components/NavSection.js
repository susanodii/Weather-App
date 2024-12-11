import { InputAdornment, TextField, Box } from "@mui/material";
import Switch from "@mui/material/Switch";

import Tooltip from "@mui/material/Tooltip";
import WeatherContext from "../../weatherContext/WeatherContex";
import { useContext, useState } from "react";

const NavSection = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  const [text, setText] = useState("");

  const { fetchCity } = useContext(WeatherContext);

  const handleChange = (e) => setText(e.target.value);
  console.log(fetchCity);

  const handleSubmit = (e) => {
    fetchCity(text);
    setText("");
  };

  return (
    <>
      <div className='flex justify-around  overflow-hidden items-end mt-[3rem]'>
        <div className='flex flex-col'>
          <Switch {...label} defaultChecked color='default' size='medium' />
          <p className='font-poppins font-extrabold leading-[27px] '>
            Light Mood
          </p>
        </div>

        <Box sx={{ width: 700, maxWidth: "100%" }} className='rounded-full'>
          <TextField
            fullWidth
            size='medium'
            variant='outlined'
            className='font-poppins rounded-full pl-2'
            type='city'
            placeholder='Search by Preferred City...'
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                paddingLeft: 2,
                borderRadius: "25px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position='end'
                  className='pl-0 cursor-pointer  '
                >
                  <Tooltip title='Search' placement='bottom' className=''>
                    <img
                      src='assets/search 1.png'
                      alt='serch-icon'
                      width={25}
                    />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <div className='flex gap-2 py-[0.7rem] px-2 bg-[#4CBB17] font-poppins text-white font-normal leading-[27px] rounded-full'>
          <img
            src='assets/current-location-icon.png'
            alt='location-icon'
            width={25}
          />
          <p>Current Location</p>
        </div>
      </div>
    </>
  );
};

export default NavSection;
