const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "GET_CITY":
      return {
        ...state,
        city: action.payload,
        isLoading: false,
      };

    // case 'GET_REPOS':
    // return{
    //   ...state,
    //   repos:action.payload,
    //   isLoading:false
    // }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    // case "CLEAR_CITIES":
    //   return {
    //     ...state,
    //     users: [],
    //   };
    default:
      return state;
  }
};

export default WeatherReducer;
