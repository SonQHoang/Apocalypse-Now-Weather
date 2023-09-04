import './FiveDayForecast.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from "../../store/userLocation"
import apocWeatherConverter from '../ApocWeather/apocweatherfunc'
import { getForcast } from "../../store/userForcast";


const FiveDayForecast = () =>{
    const dispatch = useDispatch()

    const userLocation = useSelector((state) => state.userLocation.userLocation);
    const userForcast = useSelector((state) => state.userLocation.userForcast);
    const sessionUser = useSelector((state) => state.session.user);
    const city = useSelector((state)=> state.userLocation.city)
    const country = useSelector((state)=> state.userLocation.country)
    const [isLoaded, setIsLoaded] = useState(false);

    const getDayOfWeek = (dateString) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const [year, month, day] = dateString.split('-');
      const date = new Date(Date.UTC(year, month - 1, day));
      const dayIndex = date.getUTCDay();
      return days[dayIndex];
    };


    useEffect(() => {
        dispatch(getLocation()).then(() => setIsLoaded(true))
    }, [dispatch]);

    let time;
    let weathercode;
    let maxTemp;
    let minTemp
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
      minTemp = userForcast.temperature_2m_min;
      setWeatherData(weathercode);
    }

    if (weatherData && weatherData.dailyWeather) {

      const date = time;
      const daysOfWeek = date.slice(5, 10).map((dateString) => {

        const [month, day] = dateString.split("/");
        const currentYear = new Date().getFullYear();
        return getDayOfWeek(`${currentYear}-${month}-${day}`);
      });


      return (
          <>
           <section className='fiveday-main-container'>
        <div className='heading-container'>
          <h1>5 Day Forecast for {city}, {country}</h1>
        </div>
        <div className="forecast-container">
          {daysOfWeek.map((day, index) => (
            <div className="forecast-container-weather" key={index}>
              <div className='forecast-container-weather-date'>{day}</div>
              <div className='forecast-container-weather-weather'>{weatherData.dailyWeather[index]}</div>
              <div className='forecast-container-weather-temp'>Daily High: {maxTemp[index]} °F</div>
              <div className='forecast-container-weather-temp'>Daily Low: {minTemp[index]} °F</div>
            </div>
          ))}
        </div>
      </section>
        </>
      );
    } else {
      // console.log('DAILY WEATHER',weatherData)
      return (
        <>
        </>
      );
    }
}


export default FiveDayForecast;
