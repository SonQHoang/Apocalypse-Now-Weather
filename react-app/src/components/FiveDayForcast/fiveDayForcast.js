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
      weatherData = {};
      let convertedDailyWeather = [];
      let dailyWeather = [];
      for (let i = 0; i < weathercode.length; i++) {
        let convertedCode = apocWeatherConverter(weathercode[i])
        convertedDailyWeather.push(convertedCode);
      }
      convertedDailyWeather.forEach((day) => {
        dailyWeather.push(day.name);
      });

      weatherData.dailyWeather = dailyWeather;
      return weatherData;
    };

    if (userForcast && userForcast.time) {
      time = userForcast.time;

      time.forEach((thing) => {
        let splitThing = thing.split("-");
        let spliceThing = splitThing.splice(1);
        let newtime = spliceThing.join("/");
        time.push(newtime);
      });

      weathercode = userForcast.weathercode;
      maxTemp = userForcast.temperature_2m_max;
      setWeatherData(weathercode);
    }

    if (weatherData && weatherData.dailyWeather) {
      const date = time;
      const dailyWeather = weatherData.dailyWeather;
      return (
          <>
          <div className='heading-container'>
            <h1>5 Day Forcast</h1>

          </div>
          <div className="forcast-container">
            <>
              <div className="forcast-container-weather">
                <div className='forcast-container-weather-date first-weather-container'>{date[5]}</div>
                <div className='forcast-container-weather-weather'>{dailyWeather[0]}</div>
                <div>Temp: {maxTemp[0]}</div>
              </div>
              <div className="forcast-container-weather">
                <div className='forcast-container-weather-date'>{date[6]}</div>
                <div className='forcast-container-weather-weather'>{dailyWeather[1]}</div>
                <div>Temp: {maxTemp[1]}</div>
              </div>
              <div className="forcast-container-weather">
                <div className='forcast-container-weather-date'>{date[7]}</div>
                <div className='forcast-container-weather-weather'>{dailyWeather[2]}</div>
                <div>Temp: {maxTemp[2]}</div>
              </div>
              <div className="forcast-container-weather">
                <div className='forcast-container-weather-date'>{date[8]}</div>
                <div className='forcast-container-weather-weather'>{dailyWeather[3]}</div>
                <div>Temp: {maxTemp[3]}</div>
              </div>
              <div className="forcast-container-weather">
                <div className='forcast-container-weather-date'>{date[9]}</div>
                <div className='forcast-container-weather-weather'>{dailyWeather[4]}</div>
                <div>Temp: {maxTemp[4]}</div>
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
    }
}


export default FiveDayForcast;
