import './FiveDayForecast.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from "../../store/userLocation";
import apocWeatherConverter from '../ApocWeather/apocweatherfunc';
import { getForcast } from "../../store/userForcast";

const FiveDayForecast = () => {
    const dispatch = useDispatch();

    const userLocation = useSelector((state) => state.userLocation.userLocation);
    const userForcast = useSelector((state) => state.userLocation.userForcast);
    const sessionUser = useSelector((state) => state.session.user);
    const city = useSelector((state) => state.userLocation.city);
    const country = useSelector((state) => state.userLocation.country);
    const [isLoaded, setIsLoaded] = useState(false);

    const getDayAndDate = (dateString) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const [year, month, day] = dateString.split('-');
      const date = new Date(year, month - 1, day, 0, 0, 0);
      const dayIndex = date.getDay();
      const formattedDate = `${days[dayIndex]} ${month}/${day}`;
      return formattedDate;
  };


    useEffect(() => {
        dispatch(getLocation()).then(() => setIsLoaded(true));
    }, [dispatch]);

    let time;
    let weathercode;
    let maxTemp;
    let minTemp;
    let weatherData;

    const setWeatherData = (weathercode) => {
        weatherData = {};
        let convertedDailyWeather = [];
        let dailyWeather = [];
        for (let i = 0; i < weathercode.length; i++) {
            let convertedCode = apocWeatherConverter(weathercode[i]);
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
        weathercode = userForcast.weathercode;
        maxTemp = userForcast.temperature_2m_max;
        minTemp = userForcast.temperature_2m_min;
        setWeatherData(weathercode);
    }

    if (weatherData && weatherData.dailyWeather) {
      const nextFiveDays = time.slice(0, 5);
      const nextFiveDaysAndDate = nextFiveDays.map((dateString) => {
          return getDayAndDate(dateString);
      });

        return (
            <>
                <section className='fiveday-main-container'>
                    <div className='heading-container'>
                        <h1>5 Day Forecast for {city}, {country}</h1>
                    </div>
                    <div className="forecast-container">
                    {nextFiveDaysAndDate.map((dayAndDate, index) => (
                        <div className="forecast-container-weather" key={index}>
                            <div className='forecast-container-weather-date'>{dayAndDate}</div>
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
};

export default FiveDayForecast;
