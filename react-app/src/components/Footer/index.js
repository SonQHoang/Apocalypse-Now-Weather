import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = ({ isLoaded }) => {
    return (
        <div id='footer-container'>
            <NavLink exact to='/about-us'><p>About Us</p></NavLink>
        </div>
    )
}

export default Footer;
