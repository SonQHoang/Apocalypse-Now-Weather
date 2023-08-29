import { useEffect } from 'react';

export const locationSearch = (inputId, setLatitude, setLongitude) => {
  useEffect(() => {
    if (window.Autocomplete) {
      new window.Autocomplete(inputId, {
        selectFirst: true,
        howManyCharacters: 2,
        onSearch: ({ currentValue }) => {
          const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;
          return fetch(api).then((response) => response.json());
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
  }, []);
};
