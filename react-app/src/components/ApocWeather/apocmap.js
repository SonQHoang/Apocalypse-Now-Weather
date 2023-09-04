import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L, { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './apocmap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { setLocation } from '../../store/mapStore';
import { getLocation } from "../../store/userLocation"
import apocWeatherConverter from './apocweatherfunc';
import placeholderWeatherData from './weatherdataplaceholder';
import apocWeatherData from './AWNApocWeatherData';



// const locations = [
//   { lat: 51.505, lng: -0.09, name: 'London' },
//   { lat: 52.3, lng: 4.9, name: 'Amsterdam' }
// ];

const ICON_SIZE = [25, 25];

const getNuclearIcon = () => {
  return L.icon({
    iconUrl: '/icons/radiation.png',
    iconSize: ICON_SIZE,
    iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1] - 1],
    popupAnchor: [0, -50]
  });
};


// function CustomMarker({ map }) {

//   return (location => (
//     <Marker key={location.name} position={[location.lat, location.lng]} icon={getNuclearIcon()}>
//       <Popup className='nuclearPopup'>
//         {`${location.name} is a dangerous place.`}
//       </Popup>
//     </Marker>
//   ));
// }

function UpdateCenter({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}


function ApocMap() {
  const [weatherData, setWeatherData] = useState(placeholderWeatherData);
  const [map, setMap] = useState(null);
  const sessionUser = useSelector(state => state.session.user)
  const [iconSize, setIconSize] = useState(25);
  const defaultCenter = [51.505, -0.09];
  const [center, setCenter] = useState(
    sessionUser && sessionUser.latitude && sessionUser.longitude
      ? [sessionUser.latitude, sessionUser.longitude]
      : defaultCenter
  );

  const dispatch = useDispatch()
  const userLocation = useSelector(state => state.userLocation.userLocation)

  useEffect(() => {

    if (sessionUser && sessionUser.latitude && sessionUser.longitude) {
      setCenter([sessionUser.latitude, sessionUser.longitude]);
    }
  }, [sessionUser]);


  const [detailedInfo, setDetailedInfo] = useState(null);

  useEffect(() => {
    if (sessionUser) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${sessionUser.latitude}&longitude=${sessionUser.longitude}&hourly=temperature_2m,precipitation_probability,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => console.error('Error fetching detailed information:', error));
    } else {
      setWeatherData(placeholderWeatherData);
    }
  }, [sessionUser]);



   // Function to get custom icon based on weather code
  const getCustomIcon = (weatherCode) => {
    const eventInfo = apocWeatherConverter(weatherCode);
    console.log("****eventINFO",eventInfo)
    const eventIcon = eventInfo.source;
    console.log("*****eventIcon",eventIcon)
    const eventName = eventInfo.name;

    return L.icon({
      iconUrl: eventIcon,
      iconSize: ICON_SIZE,
      iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1] - 1],
      popupAnchor: [0, -50],
    });
  };


  useEffect(() => {
    if (!map) return;

    if (window.Autocomplete) {
      new window.Autocomplete("search", {
          selectFirst: true,
          howManyCharacters: 2,
          onSearch: ({ currentValue }) => {
              const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;
              return new Promise((resolve) => {
                  fetch(api)
                      .then((response) => response.json())
                      .then((data) => {
                          resolve(data.features);
                      })
                      .catch((error) => {
                          console.error(error);
                      });
              });
          },
          onResults: ({ currentValue, matches, template }) => {
              const regex = new RegExp(currentValue, "gi");
              return matches === 0
                  ? template
                  : matches
                      .map((element) => {
                          return `
              <li class="loupe">
                <p>
                  ${element.properties.display_name.replace(regex, (str) => `<b>${str}</b>`)}
                </p>
              </li>`;
                      })
                      .join("");
          },
          onSubmit: ({ object }) => {
              map.eachLayer(function (layer) {
                  if (!!layer.toGeoJSON) {
                      map.removeLayer(layer);
                  }
              });

              const { display_name } = object.properties;
              const [lng, lat] = object.geometry.coordinates;

              fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation_probability,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`)
                  .then(response => response.json())
                  .then(data => {
                    setWeatherData(data);
                    const currentTemp = data.current_weather.temperature;
                    const currentSituation = apocWeatherConverter(data.current_weather.weathercode).name;
                    const customIcon = getCustomIcon(data.current_weather.weathercode)
                    const situationDescription = apocWeatherConverter(data.current_weather.weathercode).description;
                    const dailyHigh = data.temperature_2m_max
                    const dailyLow = data.temperature_2m_max;
                    const marker = L.marker([lat, lng], {
                        title: `Current temperature: ${currentTemp}°F`,
                        icon: customIcon
                    });
                    marker.addTo(map).bindPopup(`Current temperature: ${currentTemp}°F,<br>
                     Current Situation: ${currentSituation}, <br>
                     Description of Situation: ${situationDescription}`);
                    map.setView([lat, lng], 8);
                })
                  .catch(error => console.error('Error fetching weather data:', error));
          },
          onSelectedItem: ({ index, element, object }) => {
              console.log("onSelectedItem:", index, element, object);
          },
          noResults: ({ currentValue, template }) =>
              template(`<li>No results found: "${currentValue}"</li>`),
      });
  } else {
      console.error("Autocomplete is not loaded");
  }
}, [map, iconSize]);

useEffect(() => {
  // Check if user is logged in and has lat/lng
  if (sessionUser && sessionUser.latitude && sessionUser.longitude) {
    setCenter([sessionUser.latitude, sessionUser.longitude]);
  }
}, [sessionUser]);
console.log("sessionuser info",sessionUser)

console.log("weatherdata*****",weatherData)
return (
  <>
    <section className='mappagebodycontainer'>
      <section className='titleinfo'>
        <h1>Apocalypse Weather Now</h1>
      </section>
      <section className='mapcontainer'>

        <MapContainer whenCreated={setMap} className='mapmap' center={center} zoom={11} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <CustomMarker map={map} className='leaflet-marker-icon'/> */}
          {weatherData.current_weather.weathercode !== "Waiting to receive data" && (
        <Marker
          position={center}
          icon={getCustomIcon(weatherData.current_weather.weathercode)}
        >
          {/* Adding Popup here */}
          <Popup>
            <div>
              <h3>{`Location: ${sessionUser ? sessionUser.location : "Unknown"}`}</h3>
              <p>{`Current Situation: ${apocWeatherConverter(weatherData.current_weather.weathercode).name}`}</p>
            </div>
          </Popup>
        </Marker>
      )}
          <displayUserLocation map={map} className='leaflet-marker-icon'/>
        </MapContainer>
        <section className="auto-search-wrapper">
          <input type="text" autoComplete="off" id="search" className="full-width" placeholder="enter the city name" />
        </section>
      </section>
    </section>
    <section className='detailed_weather'>
        <h1>Detailed Information</h1>
        <p>Current Temperature: {weatherData.current_weather.temperature}
        {weatherData.current_weather.temperature !== "Waiting to receive data" ? "°F" : ""}
        </p>
        <p>
    Daily High: {weatherData.daily.temperature_2m_max[0] !== "Waiting to receive data" ? `${weatherData.daily.temperature_2m_max[0]}°F` : "Waiting to receive data"}
    &nbsp;&nbsp;&nbsp;&nbsp;
    Daily Low: {weatherData.daily.temperature_2m_min[0] !== "Waiting to receive data" ? `${weatherData.daily.temperature_2m_min[0]}°F` : "Waiting to receive data"}
  </p>
        <p>Current Situation: {weatherData.current_weather.weathercode !== "Waiting to receive data" ? apocWeatherConverter(weatherData.current_weather.weathercode).name : "Waiting to receive data"}</p>
        <p>Description of situation: {weatherData.current_weather.weathercode !== "Waiting to receive data" ? apocWeatherConverter(weatherData.current_weather.weathercode).description : "Waiting to receive data"}</p>
      </section>
  </>
);
}


export default ApocMap;
