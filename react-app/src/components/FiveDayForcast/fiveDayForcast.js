import './FiveDayForcast.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from '../../store/userLocation'
import apocWeatherConverter from '../ApocWeather/apocweatherfunc'


const FiveDayForcast = () =>{
    const dispatch = useDispatch()
    const userLocation = useSelector(state => state.userLocation.userLocation)
    const sessionUser = useSelector(state => state.session.user)
    let dailyWeatherCode;


    useEffect(() => {
        dispatch(getLocation())
    }, [dispatch, sessionUser])


    const lat = userLocation.latitude
    const lng = userLocation.longitude

    let weatherData = {};


    const setWeatherData = (data) => {
        weatherData.dailyMaxTemp = data.daily.temperature_2m_max
        dailyWeatherCode = data.daily.weathercode
        let convertedDailyWeather = [];
        let dailyWeather = [];

        for (let i = 0; i < dailyWeatherCode.length; i++) {
            convertedDailyWeather.push(apocWeatherConverter(dailyWeatherCode[i]))
        }

        convertedDailyWeather.forEach((day) => {
            dailyWeather.push(day.name)
        } )
        weatherData.dailyWeather = dailyWeather
        return weatherData
    }



    if(lat !== undefined && lng !== undefined && weatherData.dailyWeather === undefined ) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=5`)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data)

        })
        .catch(error => console.error('Error fetching weather data:', error));
    }

    console.log('WEATHER DATA', weatherData)
    if(weatherData) {
        console.log('DAILY WEATHER',weatherData)
        console.log('DAILY WEATHER WEATHER', weatherData.dailyWeather)
        console.log('DAILY WEATHER TEMP', weatherData.dailyMaxTemp)
        console.log('OBJECT KEYS', Object.values(weatherData))
        return (
            <>
                <h1>5 Day Forcast</h1>
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
    } else {
        // console.log('DAILY WEATHER',weatherData)
        return (
        <>
            <h1>5 Day Forcast</h1>
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
