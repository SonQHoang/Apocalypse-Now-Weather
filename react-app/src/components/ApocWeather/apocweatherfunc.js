const apocWeatherData = require("./AWNApocWeatherData.js");

//selects the apoc category based on day of month
function apocWeatherCategorySelector(currentDay, weatherData) {
  if (currentDay >= 1 && currentDay <= 6) {
    return weatherData.NaturalDisasters;
  }
  if (currentDay > 5 && currentDay <= 12) {
    return weatherData.SupernaturalPhenomena;
  }
  if (currentDay > 12 && currentDay <= 18) {
    return weatherData.MysticalElements;
  }
  if (currentDay > 18 && currentDay <= 24) {
    return weatherData.ParanormalChaos;
  }
  if (currentDay > 24 && currentDay <= 31) {
    return weatherData.UnpredictableTransformations;
  }
}

//converts the waether code to an specific apoc event from category
function apocWeatherConverter(weatherCode) {
  const date = new Date();
  const currentDay = date.getDate();
  const weatherCategory = apocWeatherCategorySelector(
    currentDay,
    apocWeatherData
  );
  const {
    eOne,
    eTwo,
    eThree,
    eFour,
    eFive,
    eSix,
    eSeven,
    eEight,
    eNine,
    eTen,
    eEleven,
    eTwelve,
    eThirteen,
  } = weatherCategory;
  // console.log(eOne);

  if (weatherCode === 0) {
    return eOne;
  } else if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
    return eTwo;
  } else if (weatherCode === 45 || weatherCode === 48) {
    return eThree;
  } else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
    return eFour;
  } else if (weatherCode === 56 || weatherCode === 57) {
    return eFive;
  } else if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) {
    return eSix;
  } else if (weatherCode === 66 || weatherCode === 67) {
    return eSeven;
  } else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
    return eEight;
  } else if (weatherCode === 77) {
    return eNine;
  } else if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
    return eTen;
  } else if (weatherCode === 85 || weatherCode === 86) {
    return eEleven;
  } else if (weatherCode === 95) {
    return eTwelve;
  } else if (weatherCode === 96 || 99) {
    return eThirteen;
  }
  return new Error("Invalid Weather Code");
}

module.exports = apocWeatherConverter;
