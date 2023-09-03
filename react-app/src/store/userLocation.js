const GET_LOCATION = "user/location";

export const getUserLocation = (location, forcast) => {
  return {
    type: GET_LOCATION,
    userLocation: location,
    userForcast: forcast,
  };
};

export const getLocation = () => async (dispatch) => {
  const req = await fetch("https://freeipapi.com/api/json/", {
    method: "GET",
  });

  if (!req.ok) {
    throw new Error(`Request failed with status: ${req.status}`);
  }

  if (req.ok) {
    const location = await req.json();
    const lat = location.latitude;
    const lng = location.longitude;

    const request = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=5`
    );
    if (request.ok) {
      const forcast = await request.json();

      dispatch(getUserLocation(location, forcast.daily));
    }
  }
  return req;
};


const initalState = {
  userLocation: {},
};

const userLocationReducer = (state = initalState, action) => {
  // console.log(action.userForcast)
  switch (action.type) {
    case GET_LOCATION:
      state.userLocation = action.userLocation;
      state.userForcast = action.userForcast;
      return state;
    default:
      return state;
  }
};

export default userLocationReducer
