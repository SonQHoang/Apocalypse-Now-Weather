// const GET_FORCAST = 'user/forcast'

// export const getUserForcast = (data) => {
//     console.log(data)
//     return {
//         type: GET_FORCAST,
//         userForcast: data
//     }
// }

// export const getForcast = (lat, lng) => async (dispatch) => {
//     const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=5`)
//     .then(req => req.json())
//     .then (data => {
//         getUserForcast(data)
//     })
//     .catch(error => console.error('Error fetching weather data:', error));
// }

// const initalState = {
//     userForcast: {},
//   };


// const userForcastReducer = (state = initalState, action) => {
//     console.log(action.userForcast)
//     switch (action.type) {
//       case GET_FORCAST:
//         state.userForcast = action.userForcast
//         return state;
//       default:
//         return state;
//     }
//   };

//   export default userForcastReducer
