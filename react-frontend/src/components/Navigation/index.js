import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav className="navbar">
			<div className="nav-container">
				<ul className="nav-left">
					<li>
						<NavLink exact to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/forecast">Forecast</NavLink>
					</li>
					<li>
						<NavLink to="/stories">Stories</NavLink>
					</li>
					<li>
						<NavLink to="/tips">Tips</NavLink>
					</li>
				</ul>
				<ul className="nav-right">
					<div className="profile-button-container">
					{isLoaded && (
						<li>
							<ProfileButton user={sessionUser} />
						</li>
					)}
					</div>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;