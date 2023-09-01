const GET_LOCATION = "user/location";

export const getUserLocation = (res) => {
  return {
    type: GET_LOCATION,
    userLocation: res,
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
    const res = await req.json();
    dispatch(getUserLocation(res));
    return res;
  } else {
    return req.error
  }
};


const initalState = {
  userLocation: {},
};

const userLocationReducer = (state = initalState, action) => {

  switch (action.type) {
    case GET_LOCATION:
      state.userLocation = action.userLocation
      return state;
    default:
      return state;
  }
};

export default userLocationReducer
