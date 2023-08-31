

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { signUp } from "../../store/session";
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

// function SignupFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const [map, setMap] = useState(null);

//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState("");
//   const [prepperType, setPrepperType] = useState("");
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [latitude, setLatitude] = useState(51.505); // Default latitude
//   const [longitude, setLongitude] = useState(-0.09); // Default longitude
//   const [errors, setErrors] = useState([]);

//   useEffect(() => {
//     if (!map) return;

//     if (window.Autocomplete) {
//       new window.Autocomplete('locationSearch', {
//         selectFirst: true,
//         howManyCharacters: 2,
//         onSearch: ({ currentValue }) => {
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
//           setLatitude(lat);
//           setLongitude(lng);
//           map.setView([lat, lng], 13);
//         }
//       });
//     } else {
//       console.error('Autocomplete is not loaded');
//     }
//   }, [map]);

//   if (sessionUser) return <Redirect to="/" />;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       const data = await dispatch(signUp(username, email, password, latitude, longitude, bio, prepperType));
//       if (data) {
//         setErrors(data);
//       }
//     } else {
//       setErrors(['Confirm Password field must be the same as the Password field']);
//     }
//   };

//   return (
//     <>
//       <section className="signupcontainerpage">
//         <h1 id="signuptitlepage">Survivor Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="error-messages">
//             {errors.map((error, idx) => (
//               <p key={idx}>{error}</p>
//             ))}
//           </div>
//           <input type="hidden" name="latitude" value={latitude} />
//           <input type="hidden" name="longitude" value={longitude} />
//           <label id="emaillabelpage">
//             Email
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label id="usernamelabelpage">
//             Username
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </label>
// 		  <div className="form-group">
//  				<label id="preppertypelabelpage">
//  					Prepper Type
//  					<select id="preppertypepage"
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
// 				<label id="biolabelpage">
// 					Short Personal Bio:
// 				</label>
// 					<textarea id="bioinputpage"
// 					value={bio}
// 					rows='2'
// 					cols='50'
// 					onChange={(e) => setBio(e.target.value)}
// 					required
// 					/>
// 				</div>
//           <label id="passwordlabelpage">
//             Password
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <label id="confirmpasswordlabelpage">
//             Confirm Password
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </label>
//           <button id="signupsubmitpage" type="submit">
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
//           <div className="location-sectionpage">
//           <label id="locationsearchlabelpage">
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

// export default SignupFormPage;










//import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { signUp } from '../../store/session';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

// function SignupFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const [map, setMap] = useState(null);
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState("");
//   const [prepperType, setPrepperType] = useState("");
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [latitude, setLatitude] = useState(51.505); // Default latitude
//   const [longitude, setLongitude] = useState(-0.09); // Default longitude
//   const [errors, setErrors] = useState([]);

//   useEffect(() => {
//     if (!map) return;

//     if (window.Autocomplete) {
//       new window.Autocomplete('locationSearch', {
//         selectFirst: true,
//         howManyCharacters: 2,
//         onSearch: ({ currentValue }) => {
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
//           setLatitude(lat);
//           setLongitude(lng);
//           map.setView([lat, lng], 13);
//         }
//       });
//     } else {
//       console.error('Autocomplete is not loaded');
//     }
//   }, [map]);

//   if (sessionUser) return <Redirect to="/" />;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       const data = await dispatch(signUp(username, email, password, latitude, longitude, bio, prepperType));
//       if (data) {
//         setErrors(data);
//       }
//     } else {
//       setErrors(['Confirm Password field must be the same as the Password field']);
//     }
//   };

//   return (
//     <>
//       <section className="signupcontainerpage">
//         <h1 id="signuptitlepage">Survivor Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="error-messages">
//             {errors.map((error, idx) => (
//               <p key={idx}>{error}</p>
//             ))}
//           </div>
//           <input type="hidden" name="latitude" value={latitude} />
//           <input type="hidden" name="longitude" value={longitude} />
//           <label id="emaillabelpage">
//             Email
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label id="usernamelabelpage">
//             Username
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </label>
//           <label id="preppertypelabelpage">
//             Prepper Type
//             <select id="preppertypepage"
//               value={prepperType}
//               onChange={(e) => setPrepperType(e.target.value)}
//               required
//             >
//               <option value="" disabled>Select a Prepper Type</option>
//               {['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
//                 'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
//                 'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper'].map((type, idx) => (
//                   <option key={idx} value={type}>{type}</option>
//                 ))}
//             </select>
//           </label>
//           <label id="biolabelpage">
//             Short Personal Bio:
//           </label>
//           <textarea id="bioinputpage"
//             value={bio}
//             rows='2'
//             cols='50'
//             onChange={(e) => setBio(e.target.value)}
//             required
//           />
//           <label id="passwordlabelpage">
//             Password
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <label id="confirmpasswordlabelpage">
//             Confirm Password
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </label>
//           <button id="signupsubmitpage" type="submit">
//             Sign Up
//           </button>
//         </form>

//         <div id="miniature-map">
//           <MapContainer whenCreated={setMap} center={[latitude, longitude]} zoom={13} style={{ height: '200px', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <Marker position={[latitude, longitude]} icon={getNuclearIcon()}>
//               <Popup>
//                 You are here.
//               </Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//         <div className="location-sectionpage">
//           <label id="locationsearchlabelpage">
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

// export default SignupFormPage;
