from flask import Blueprint, request, jsonify, request






     {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=5`)
        .then(response => response.json())
        .then(data => {


        })
        .catch(error => console.error('Error fetching weather data:', error));
    }
