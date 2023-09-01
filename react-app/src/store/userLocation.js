const GET_LOCATION = "user/location";

export const getUserLocation = (data) => {
  return {
    type: GET_LOCATION,
    location: data,
  };
};

export const getLocation = async () => {
  const req = await fetch("https://freeipapi.com/api/json/", {
    method: "GET",
  });

  if (!req.ok) {
    throw new Error(`Request failed with status: ${req.status}`);
  }
  const res = await req.json();
  if (res.ok) {
    getUserLocation(res);
    return res;
  }
};

const initalState = {
  userLocation: {},
};

const userLocationReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case GET_LOCATION:
      newState = Object.assign({}, state);
      // console.log(' this is what im logging ', newState)
      let newObject = {};

      action.comments.forEach((comment) => {
        newObject[comment.id] = comment;
      });
      newState = newObject;
      return newState;

    default:
      return state;
  }
};

export default userLocationReducer
