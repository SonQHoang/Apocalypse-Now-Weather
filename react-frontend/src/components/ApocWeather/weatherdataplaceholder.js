const placeholderWeatherData = {
    latitude: "Waiting to receive data",
    longitude: "Waiting to receive data",
    generationtime_ms: "Waiting to receive data",
    utc_offset_seconds: "Waiting to receive data",
    timezone: "Waiting to receive data",
    timezone_abbreviation: "Waiting to receive data",
    elevation: "Waiting to receive data",
    current_weather: {
      temperature: "Waiting to receive data",
      windspeed: "Waiting to receive data",
      winddirection: "Waiting to receive data",
      weathercode: "Waiting to receive data",
      is_day: "Waiting to receive data",
      time: "Waiting to receive data"
    },
    hourly_units: {
      time: "Waiting to receive data",
      temperature_2m: "Waiting to receive data",
      precipitation_probability: "Waiting to receive data",
      rain: "Waiting to receive data",
      weathercode: "Waiting to receive data"
    },
    hourly: {
      time: Array(96).fill("Waiting to receive data"),
      temperature_2m: Array(96).fill("Waiting to receive data"),
      precipitation_probability: Array(96).fill("Waiting to receive data"),
      rain: Array(96).fill("Waiting to receive data"),
      weathercode: Array(96).fill("Waiting to receive data")
    },
    daily_units: {
      time: "Waiting to receive data",
      weathercode: "Waiting to receive data",
      temperature_2m_max: "Waiting to receive data",
      temperature_2m_min: "Waiting to receive data",
      sunrise: "Waiting to receive data",
      sunset: "Waiting to receive data"
    },
    daily: {
      time: Array(7).fill("Waiting to receive data"),
      weathercode: Array(7).fill("Waiting to receive data"),
      temperature_2m_max: Array(7).fill("Waiting to receive data"),
      temperature_2m_min: Array(7).fill("Waiting to receive data"),
      sunrise: Array(7).fill("Waiting to receive data"),
      sunset: Array(7).fill("Waiting to receive data")
    }
  };


  export default placeholderWeatherData
