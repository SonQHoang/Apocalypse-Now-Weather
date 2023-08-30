
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { setLocation } from '../../store/mapStore';
import { signUp } from "../../store/session";

const prepper_descriptions = {
  'Nuclear Prepper': 'These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.',
  'EMP/Solar Flare Prepper': 'They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.',
  'Economic Collapse Prepper': 'These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.',
  'Pandemic Prepper': 'Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.',
  'Natural Disaster Prepper': 'Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.',
  'Biological/Chemical Attack Prepper': 'These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.',
  'Cyber-Attack Prepper': 'With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.',
  'Civil Unrest or Martial Law Prepper': 'They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.',
  'Ecological/Environmental Prepper': 'Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.',
  'Peak Oil/Resource Depletion Prepper': 'They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don\'t rely on fossil fuels.',
  'Alien Invasion Prepper': 'While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.',
  'Zombie Apocalypse Prepper': 'Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.',
  'Generalist Prepper': 'Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.'
}
const locations = [
  { lat: 51.505, lng: -0.09, name: 'London' },
];

const ICON_SIZE = [25, 25];

const getNuclearIcon = () => {
  return L.icon({
    iconUrl: '/icons/radiation.png',
    iconSize: ICON_SIZE,
    iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1] - 1],
    popupAnchor: [-3, -76]
  });
};

function CustomMarker({ map }) {

  return locations.map(location => (
    <Marker key={location.name} position={[location.lat, location.lng]} icon={getNuclearIcon()}>
      <Popup className='nuclearPopup'>
        {`${location.name} is a dangerous place.`}
      </Popup>
    </Marker>
  ));
}

function LocationSetter({ setLatitude, setLongitude }) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      // Update the latitude and longitude states
      setLatitude(lat);
      setLongitude(lng);
    },
  });

  return null;
}


function SignUpForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [location, setlocation] = useState("");
  const [latitude, setLatitude] = useState(51.505); // Default lat-lng
  const [longitude, setLongitude] = useState(-0.09); // Default lat-lng
  const [bio, setBio] = useState("");
  const [prepper_type, setPrepperType] = useState("")
  const [prepper_description, setPrepper_Description] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [map, setMap] = useState(null);
  const [iconSize, setIconSize] = useState(25);

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
            if(!map){
              console.error("map is not initialized yet");
              return;
            }
              map.eachLayer(function (layer) {
                  if (!!layer.toGeoJSON) {
                      map.removeLayer(layer);
                  }
              });

              const { display_name } = object.properties;
              const [lng, lat] = object.geometry.coordinates;
              const locationParts = display_name.split(",");
              const cityName = locationParts[0]
              const country = locationParts[locationParts.length - 1];
              setlocation(`${cityName}, ${country}`)
              map.setView([lat, lng], 8);
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

const handleSubmit = async (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        const data = await dispatch(signUp(username, email, password, latitude, longitude));
        if (data) {
          setErrors(data);
        }
      } else {
        setErrors(["Confirm Password field must be the same as the Password field"]);
      }
    };

    useEffect(() => {
      if (prepper_type) {
        setPrepper_Description(prepper_descriptions[prepper_type]);
      }
    }, [prepper_type]);


return (
  <>
    <section className='signuptitleinfo'>
      <h1 id="signuptitle">Survivor Sign Up</h1>
      </section>
    <section className='signupcontainer'>
      <section className='signupform'>
      <form onSubmit={handleSubmit}>
           {/* Error messages */}
            <div className="error-messages">
            {errors.map((error, idx) => (
              <p key={idx}>{error}</p>
            ))}
          </div>


				{/* Hidden input fields for latitude and longitude */}
				    <input type="hidden" name="latitude" value={latitude} />
        		<input type="hidden" name="longitude" value={longitude} />
            <input type="hidden" name="prepper_description" value={prepper_description} />

          {/* Email Input */}
          <label id="emaillabel">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Username Input */}
          <label id="usernamelabel">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
			<div className="form-group">
				<label id="preppertypelabel">
					Prepper Type
					<select id="preppertype"
					value={prepper_type}
					onChange={(e) => setPrepperType(e.target.value)}
					required
					>
					<option value="" disabled>Select a Prepper Type</option>
					{['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
                 'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
                 'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper'].map((type, idx) => (
						<option key={idx} value={type}>{type}</option>
					))}
					</select>
				</label>
				</div>
				<div className="form-group">
				<label id="biolabel">
					Short Personal Bio:
				</label>
					<textarea id="bioinput"
					value={bio}
					rows='2'
					cols='50'
					onChange={(e) => setBio(e.target.value)}
					required
					/>
				</div>
          {/* Password Input */}
          <label id="passwordlabel">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {/* Confirm Password Input */}
          <label id="confirmpasswordlabel">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          {/* Submit Button */}
          <button id="signupsubmit" type="submit">Sign Up</button>
        </form>
      </section>
      <label id="locationLabel">
          Current Location
          <input
            type="text"
            value={location}
            placeholder='This field is set automatically'
            readOnly
          />
        </label>
      <section className='signupmapcontainer'>
        <MapContainer whenCreated={setMap} className='mapmap' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CustomMarker map={map} />
          <LocationSetter setLatitude={setLatitude} setLongitude={setLongitude} />
        </MapContainer>
        <section className="auto-search-wrapper">
          <input type="text" autoComplete="off" id="search" className="full-width" placeholder="enter the city name" />
        </section>
      </section>
    </section>

  </>
);
}


export default SignUpForm;
