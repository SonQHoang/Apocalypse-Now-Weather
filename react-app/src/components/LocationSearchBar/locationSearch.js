import { useEffect, useState } from 'react';

export const useLocationSearch = (inputId, setLatitude, setLongitude) => {

  const [htmlString, setHtmlString] = useState('');

  useEffect(() => {
    if (window.Autocomplete) {
      new window.Autocomplete(inputId, {
        selectFirst: true,
        howManyCharacters: 2,
        onSearch: ({ currentValue }) => {
          const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;
          return fetch(api)
          .then((response) => response.json())
          .then((data) => {
            return data.features;
          });
      },
        onResults: ({ currentValue, matches }) => {
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

              setHtmlString(generatedHtmlString);
            }
          },
          onSubmit: ({ object }) => {
            const [lng, lat] = object.geometry.coordinates;
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
