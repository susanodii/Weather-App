import { InputAdornment, TextField, Box } from "@mui/material";
import Switch from "@mui/material/Switch";

const NavSection = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

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
            // value={filter.search}
            placeholder='Search by Preferred City...'
            // onChange={(event) => {
            //   setFilter({ ...filter, search: event.target.value });
            // }}
            sx={{
              "& .MuiOutlinedInput-root": {
                paddingLeft: 2,
                borderRadius: "25px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' className='pl-0 '>
                  <img src='assets/search 1.png' alt='serch-icon' width={25} />
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
