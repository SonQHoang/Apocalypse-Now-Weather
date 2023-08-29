import { useEffect } from 'react';

export const useLocationSearch = (inputId, setLatitude, setLongitude) => {
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
            console.log("Received data:", data);  // Debugging line
            return data;
          });
      },
        onResults: ({ currentValue, matches, template }) => {
            console.log("Received matches:", matches);
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
};
