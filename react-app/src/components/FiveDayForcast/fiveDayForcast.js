import './FiveDayForcast.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from "../../store/userLocation"
import apocWeatherConverter from '../ApocWeather/apocweatherfunc'
import { getForcast } from "../../store/userForcast";


const FiveDayForcast = () =>{
    const dispatch = useDispatch()

    const userLocation = useSelector((state) => state.userLocation.userLocation);
    const userForcast = useSelector((state) => state.userLocation.userForcast);
    const sessionUser = useSelector((state) => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);





    useEffect(() => {
        dispatch(getLocation()).then(() => setIsLoaded(true))
    }, [dispatch]);

    let time;
    let weathercode;
    let maxTemp;
    let weatherData;

    const setWeatherData = (weathercode) => {
      weatherData = {}
      let convertedDailyWeather = [];
      let dailyWeather = [];
      for (let i = 0; i < weathercode.length; i++) {
        convertedDailyWeather.push(apocWeatherConverter(weathercode[i]));
      }
      convertedDailyWeather.forEach((day) => {
        dailyWeather.push(day.name);
      });
      weatherData.dailyWeather = dailyWeather;
      return weatherData;
    };
    if(userForcast && userForcast.time) {
        time = userForcast.time
        weathercode = userForcast.weathercode
        maxTemp = userForcast.temperature_2m_max
        setWeatherData(weathercode)
    }

    console.log(weatherData)



    if(weatherData && weatherData.dailyWeather) {
        const dailyWeather = weatherData.dailyWeather
      return (
        <>
          <h1>5 Day Forcast</h1>
          <div className="forcast-container">

            <>
                <div className='forcast-container-weather-temp'>
                    {dailyWeather[0]}
                </div>
                <div className='forcast-container-weather-temp'>
                    {dailyWeather[1]}
                </div>
                <div className='forcast-container-weather-temp'>
                    {dailyWeather[2]}
                </div>
                <div className='forcast-container-weather-temp'>
                    {dailyWeather[3]}
                </div>
                <div className='forcast-container-weather-temp'>
                    {dailyWeather[4]}
                </div>
            </>

          </div>
        </>
      );
    } else {
        // console.log('DAILY WEATHER',weatherData)
        return (
        <>
            {/* <h1>5 Day Forcast</h1> */}
            <div className='forcast-container'>
                {/* {weatherData.map((dailyMaxTemp, dailyWeather) = (
                    <>
                    <div className='forcast-container-weather'>{dailyWeather}</div>
                    <div className='forcast-container-weather'>{dailyMaxTemp}</div>
                    </>
                ))} */}
            </div>
        </>
    )
}
}


export default FiveDayForcast;
