import { useEffect, useState } from 'react';

export const useLocationSearch = (inputId, setLatitude, setLongitude) => {

  const [htmlString, setHtmlString] = useState('');

  useEffect(() => {
        console.log("useLocationSearch useEffect triggered");  // Debugging line
        console.log("inputId:", inputId);  // Debugging line
        console.log("setLatitude:", setLatitude);  // Debugging line
        console.log("setLongitude:", setLongitude);  // Debugging line
    if (window.Autocomplete) {
        console.log("Initializing Autocomplete");  // Debugging line
      new window.Autocomplete(inputId, {
        selectFirst: true,
        howManyCharacters: 2,
        onSearch: ({ currentValue }) => {
            console.log("Searching for:", currentValue);
          const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;
          return fetch(api)
          .then((response) => response.json())
          .then((data) => {
            console.log("***Received data:***", data.features);  // Debugging line
            return data.features;
          });
      },
        onResults: ({ currentValue, matches }) => {
            console.log("Received matches:", matches);
            if (matches && matches.length > 0) {
              const regex = new RegExp(currentValue, "gi");
              const generatedHtmlString  = matches.features.map((feature) => {
                const [lng, lat] = feature.geometry.coordinates;
                return `
                  <li class="loupe">
                    <p>
                      ${feature.properties.display_name.replace(regex, (str) => `<b>${str}</b>`)} - Lat: ${lat}, Lng: ${lng}
                    </p>
                  </li>`;
              }).join("");

              console.log("Generated HTML:", htmlString); // Debugging line
              setHtmlString(generatedHtmlString);
            }
          },
          onSubmit: ({ object }) => {
            const [lng, lat] = object.geometry.coordinates;
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            setLatitude(lat);
            setLongitude(lng);
          },
        });
      } else {
        console.error("Autocomplete is not loaded");
      }
    }, [inputId, setLatitude, setLongitude]);
    return htmlString
  };
