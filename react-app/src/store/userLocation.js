const GET_LOCATION = "user/location";

export const getUserLocation = (location, forcast, city, country) => {
  return {
    type: GET_LOCATION,
    userLocation: location,
    userForcast: forcast,
    city,
    country
  };
};

async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.address;
}
export const getLocation = () => async (dispatch) => {
  const req = await fetch("https://freeipapi.com/api/json/", {
    method: "GET",
  });

  if (req.ok) {
    const location = await req.json();
    const { latitude, longitude } = location;

    // Get reverse geocoded location data
    const address = await reverseGeocode(latitude, longitude);
    const city = address.city || address.town || '';
    const country = address.country || '';

    const request = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=5`
    );

    if (request.ok) {
      const forcast = await request.json();
      // Dispatch action with city and country
      dispatch(getUserLocation(location, forcast.daily, city, country));
    }
  } else {
    throw new Error(`Request failed with status: ${req.status}`);
  }
  return req;
};

const initialState = {
  userLocation: {},
  city: '',
  country: ''
};

const userLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        userLocation: action.userLocation,
        userForcast: action.userForcast,
        city: action.city,
        country: action.country
      };
    default:
      return state;
  }
};

export default userLocationReducer;
