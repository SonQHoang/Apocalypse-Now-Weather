import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Footer.css';

function Footer({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const [onHoverOne, setOnHoverOne] = useState('hidden')
	const [onHoverTwo, setOnHoverTwo] = useState('hidden')

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left">
					<div className='footer-left-top-bar'>
						<div className='footer-left-item' onMouseEnter={() => setOnHoverOne('visible')} onMouseLeave={() => setOnHoverOne('hidden')}>
							<NavLink id='footer-bar-about-us' to="/about-us">About Us</NavLink>
                            <span id={`footer-span-one-${onHoverOne}`} className={`footer-span-one-${onHoverOne}`}></span>
						</div>
						<div className='footer-right-item' onMouseEnter={() => setOnHoverTwo('visible')} onMouseLeave={() => setOnHoverTwo('hidden')}>
							<NavLink id='footer-bar-attributions' to="/attributions">Attributions</NavLink>
                            <span id={`footer-span-two-${onHoverTwo}`} className={`footer-span-two-${onHoverTwo}`}></span>
						</div>
					</div>
				</div>
                </div>
		</footer>
        )
    }

export default Footer
