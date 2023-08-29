import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocationSearch } from "../LocationSearchBar/locationSearch";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { signUp } from "../../store/session";
import L from 'leaflet';
import "./SignupForm.css";


const ICON_SIZE = [25, 25]; // Width, Height

const getNuclearIcon = () => {
  return L.icon({
    iconUrl: '/icons/radiation.png',
    iconSize: ICON_SIZE,
    iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1] - 1],
    popupAnchor: [-3, -76]
  });
};

function SignupFormModal() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [latitude, setLatitude] = useState(51.505); // Default lat-lng
  const [longitude, setLongitude] = useState(-0.09); // Default lat-lng
  const [bio, setBio] = useState("");
  const [prepperType, setPrepperType] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const [mapCenter, setMapCenter] = useState([latitude, longitude]);
  const [mapZoom, setMapZoom] = useState(13);
  useLocationSearch("locationSearch", setLatitude, setLongitude);
  useEffect(() => {

    setMapCenter([latitude, longitude]);
  }, [latitude, longitude]);

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



  return (
    <>
      <section className="signupcontainer">
        <h1 id="signuptitle">Survivor Sign Up</h1>


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
					value={prepperType}
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
		 {/* Location Search and Map */}
          <div id="miniature-map">
            <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: "200px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={mapCenter}>
                <Popup>
                  You are here.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="location-section">
          {/* Location Search Input */}
          <label id="locationsearchlabel">
            Location Search
            <input
              type="text"
              id="locationSearch"
              placeholder="Search for your location"
            />
          </label>
        </div>

      </section>
    </>
  );
}

export default SignupFormModal;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { signUp } from '../../store/session';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import './SignupForm.css';

// const ICON_SIZE = [25, 25]; // Width, Height

// const getNuclearIcon = () => {
//   return L.icon({
//     iconUrl: '/icons/radiation.png',
//     iconSize: ICON_SIZE,
//     iconAnchor: [ICON_SIZE[0] / 2, ICON_SIZE[1] - 1],
//     popupAnchor: [-3, -76]
//   });
// };

// function SignupFormModal() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState("");
//   const [prepperType, setPrepperType] = useState("")
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [latitude, setLatitude] = useState(51.505);
//   const [longitude, setLongitude] = useState(-0.09);
//   const [errors, setErrors] = useState([]);

//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (!map) return;

//     if (window.Autocomplete) {
//       new window.Autocomplete('locationSearch', {
//         selectFirst: true,
//         howManyCharacters: 2,
//         onSearch: ({ currentValue }) => {
// 			console.log("onSearch triggered", currentValue);
//           const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(currentValue)}`;
//           return new Promise((resolve) => {
//             fetch(api)
//               .then((response) => response.json())
//               .then((data) => {
//                 resolve(data.features);
//               })
//               .catch((error) => {
//                 console.error(error);
//               });
//           });
//         },
//         onSubmit: ({ object }) => {
//           const [lng, lat] = object.geometry.coordinates;
// 		  console.log("onSubmit triggered", object);
//           setLatitude(lat);
//           setLongitude(lng);
//           map.setView([lat, lng], 13);
//         }
//       });
//     } else {
//       console.error('Autocomplete is not loaded');
//     }
//   }, [map]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       const data = await dispatch(signUp(username, email, password, latitude, longitude));
//       if (data) {
//         setErrors(data);
//       }
//     } else {
//       setErrors(['Confirm Password field must be the same as the Password field']);
//     }
//   };
//   useEffect(() => {
// 	if(!window.Autocomplete) {
// 	  console.error('Autocomplete library is not loaded');
// 	}
//   }, []);

//   return (
//     <>
//       <section className="signupcontainer">
//         <h1 id="signuptitle">Survivor Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="error-messages">
//             {errors.map((error, idx) => (
//               <p key={idx}>{error}</p>
//             ))}
//           </div>
//           <input type="hidden" name="latitude" value={latitude} />
//           <input type="hidden" name="longitude" value={longitude} />
//           <label id="emaillabel">
//             Email
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label id="usernamelabel">
//             Username
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </label>
// 		  <div className="form-group">
//  				<label id="preppertypelabel">
//  					Prepper Type
//  					<select id="preppertype"
// 					value={prepperType}
// 					onChange={(e) => setPrepperType(e.target.value)}
// 					required
// 					>
// 					<option value="" disabled>Select a Prepper Type</option>
// 					{['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
//                  'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
//                  'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper'].map((type, idx) => (
// 						<option key={idx} value={type}>{type}</option>
// 					))}
// 					</select>
// 				</label>
// 				</div>
// 				<div className="form-group">
// 				<label id="biolabel">
// 					Short Personal Bio:
// 				</label>
// 					<textarea id="bioinput"
// 					value={bio}
// 					rows='2'
// 					cols='50'
// 					onChange={(e) => setBio(e.target.value)}
// 					required
// 					/>
// 				</div>
//           <label id="passwordlabel">
//             Password
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <label id="confirmpasswordlabel">
//             Confirm Password
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </label>
//           <button id="signupsubmit" type="submit">
//             Sign Up
//           </button>
//         </form>

//           <div id="miniature-map">
//             <MapContainer whenCreated={setMap} center={[latitude, longitude]} zoom={13} style={{ height: '200px', width: '100%' }}>
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//               <Marker position={[latitude, longitude]} icon={getNuclearIcon()}>
//                 <Popup>
//                   You are here.
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </div>
// 		  <div className="location-section">
//           <label id="locationsearchlabel">
//             Location Search
//             <input
//               type="text"
//               id="locationSearch"
//               placeholder="Search for your location"
//             />
//           </label>
//         </div>
//       </section>
//     </>
//   );
// }

// export default SignupFormModal;








// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useModal } from "../../context/Modal";
// import { signUp } from "../../store/session";
// import { useLocationSearch } from "../LocationSearchBar/locationSearch";
// import "./SignupForm.css";

// function SignupFormModal() {
// 	const dispatch = useDispatch();

// 	const [email, setEmail] = useState("");
// 	const [username, setUsername] = useState("");
// 	const [latitude, setLatitude] = useState("");
// 	const [longitude, setLongitude] = useState("");
// 	const [bio, setBio] = useState("");
// 	const [prepperType, setPrepperType] = useState("")
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const [errors, setErrors] = useState([]);
// 	const { closeModal } = useModal();


// 	useLocationSearch("locationSearch", setLatitude, setLongitude);

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (password === confirmPassword) {
// 			const data = await dispatch(signUp(username, email, password, latitude, longitude));
// 			if (data) {
// 				setErrors(data);
// 			} else {
// 				closeModal();
// 			}
// 		} else {
// 			setErrors([
// 				"Confirm Password field must be the same as the Password field",
// 			]);
// 		}
// 	};

// 	return (
// 		<>

// 		  <section className="signupcontainer">
// 			<h1 id="signuptitle">Survivor Sign Up</h1>
// 			<form onSubmit={handleSubmit}>
// 			  <div className="error-messages">
// 				{errors.map((error, idx) => (
// 				  <p key={idx}>{error}</p>
// 				))}
// 			  </div>
// 			  <div className="form-group">
// 				<label id="emaillabel">
// 				  Email
// 				  <input id="emailinput"
// 					type="text"
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 					required
// 				  />
// 				</label>
// 			  {/* </div>
// 			  <div className="form-group"> */}
// 				<label id="usernamelabel">
// 				  Username
// 				  <input id="usernameinput"
// 					type="text"
// 					value={username}
// 					onChange={(e) => setUsername(e.target.value)}
// 					required
// 				  />
// 				</label>
// 			  </div>
// 			  <div className="form-group">
// 				<label id="locationsearchlabel">
// 				  Location Search
// 				  <input
// 					type="text"
// 					id="locationSearch"
// 					placeholder="Search for your location"
// 				  />
// 				</label>
// 			  </div>
// 			  <div className="form-group">
// 				<label id="preppertypelabel">
// 					Prepper Type
// 					<select id="preppertype"
// 					value={prepperType}
// 					onChange={(e) => setPrepperType(e.target.value)}
// 					required
// 					>
// 					<option value="" disabled>Select a Prepper Type</option>
// 					{['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
//                  'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
//                  'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper'].map((type, idx) => (
// 						<option key={idx} value={type}>{type}</option>
// 					))}
// 					</select>
// 				</label>
// 				</div>
// 				<div className="form-group">
// 				<label id="biolabel">
// 					Short Personal Bio:
// 				</label>
// 					<textarea id="bioinput"
// 					value={bio}
// 					rows='2'
// 					cols='50'
// 					onChange={(e) => setBio(e.target.value)}
// 					required
// 					/>
// 				</div>
// 			  <div className="form-group">
// 				<label id="passwordlabel">
// 				  Password
// 				  <input className="passwordinput"
// 					type="password"
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 					required
// 				  />
// 				</label>

// 				<label id="confirmpasswordlabel">
// 				  Confirm Password
// 				  <input className="passwordinput"
// 					type="password"
// 					value={confirmPassword}
// 					onChange={(e) => setConfirmPassword(e.target.value)}
// 					required
// 				  />
// 				</label>
// 			  </div>
// 			  <button id="signupsubmit" type="submit">Sign Up</button>
// 			</form>
// 		  </section>
// 		</>
// 	  );
// }

// export default SignupFormModal;
