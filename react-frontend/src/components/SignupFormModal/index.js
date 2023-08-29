import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { locationSearch } from "../LocationSearchBar/locationSearch";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");
	const [bio, setBio] = useState("");
	const [prepperType, setPrepperType] = useState("")
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();


	locationSearch("locationSearch", setLatitude, setLongitude)

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, latitude, longitude));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>

		  <section className="signupcontainer">
			<h1 id="signuptitle">Survivor Sign Up</h1>
			<form onSubmit={handleSubmit}>
			  <div className="error-messages">
				{errors.map((error, idx) => (
				  <p key={idx}>{error}</p>
				))}
			  </div>
			  <div className="form-group">
				<label id="emaillabel">
				  Email
				  <input id="emailinput"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				  />
				</label>
			  {/* </div>
			  <div className="form-group"> */}
				<label id="usernamelabel">
				  Username
				  <input id="usernameinput"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				  />
				</label>
			  </div>
			  <div className="form-group">
				<label id="locationsearchlabel">
				  Location Search
				  <input
					type="text"
					id="locationSearch"
					placeholder="Search for your location"
				  />
				</label>
			  </div>
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
			  <div className="form-group">
				<label id="passwordlabel">
				  Password
				  <input className="passwordinput"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				  />
				</label>

				<label id="confirmpasswordlabel">
				  Confirm Password
				  <input className="passwordinput"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				  />
				</label>
			  </div>
			  <button id="signupsubmit" type="submit">Sign Up</button>
			</form>
		  </section>
		</>
	  );
}

export default SignupFormModal;
