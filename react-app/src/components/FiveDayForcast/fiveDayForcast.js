import './FiveDayForcast.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from "../../store/userLocation"
import apocWeatherConverter from '../ApocWeather/apocweatherfunc'
import { getForcast } from "../../store/userForcast";


const FiveDayForcast = () =>{
    const dispatch = useDispatch()

    const userLocationAndForcast = useSelector((state) => state.userLocation);
    const sessionUser = useSelector((state) => state.session.user);

    let dailyWeatherCode;
    let weatherData = {};

    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    console.log(userLocationAndForcast.userForcast)

    const setWeatherData = (userForcast, weatherData) => {
      console.log("USER FORCAST", userForcast);
      weatherData.dailyMaxTemp = userForcast.temperature_2m_max;
      console.log('WEATHERDATA.DAILYMAXTEMP', weatherData.dailyMaxTemp)
      dailyWeatherCode = userForcast.weathercode;
      let convertedDailyWeather = [];
      let dailyWeather = [];
      for (let i = 0; i < dailyWeatherCode.length; i++) {
        convertedDailyWeather.push(apocWeatherConverter(dailyWeatherCode[i]));
      }
      convertedDailyWeather.forEach((day) => {
        dailyWeather.push(day.name);
      });
      weatherData.dailyWeather = dailyWeather;
      return weatherData;
    };


    console.log("WEATHER DATA", weatherData);



    if(weatherData) {
      // console.log('DAILY WEATHER',weatherData)
      // console.log('DAILY WEATHER WEATHER', weatherData.dailyWeather)
      // console.log('DAILY WEATHER TEMP', weatherData.dailyMaxTemp)
      // console.log('OBJECT KEYS', Object.values(weatherData))
      return (
        <>
          {/* <h1>5 Day Forcast</h1> */}
          <div className="forcast-container">
            {/* {weatherData.map((dailyMaxTemp, dailyWeather) = (
                        <>
                        <div className='forcast-container-weather'>{dailyWeather}</div>
                        <div className='forcast-container-weather'>{dailyMaxTemp}</div>
                        </>
                    ))} */}
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
