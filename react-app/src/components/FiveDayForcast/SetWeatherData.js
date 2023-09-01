
import apocWeatherConverter from '../ApocWeather/apocweatherfunc'

let dailyWeatherCode;
let weatherData = {}

export const convertedWeatherData = (data) => {
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
}
