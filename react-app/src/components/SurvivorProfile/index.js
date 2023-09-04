// import { useModal } from '../../context/Modal.js'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './SurvivorProfile.css'

const SurvivorProfile = () => {
    const sessionUser = useSelector(state => state.session.user)
    // const { closeModal } = useModal()
    return (
        <>
        <div className='survivor-profile-wrapper'>
            <div id='survivor-profile-container'>
                <div className='profile-item-container' id='first-profile-item'>
                    <h2>{sessionUser.first_name} {sessionUser.last_name}</h2>
                </div>
                <div className='profile-item-container' id='second-profile-item'>
                    <h3>@{sessionUser.username}</h3>
                </div>
                <div className='profile-item-container bubble-container' id='first-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Bio</h3>
                    </div>
                    <div className='bubble-container-data' id='first-bubble-data'>
                        <p>{sessionUser.bio}</p>
                    </div>
                </div>
                <div className='profile-item-container bubble-container' id='second-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Prepper Type: </h3>
                    </div>
                    <div className='bubble-container-data' id='second-bubble-data'>
                        <p>{sessionUser.prepper_type}</p>
                    </div>
                </div>
                <div className='profile-item-container bubble-container' id='third-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Prepper Description</h3>
                    </div>
                    <div className='bubble-container-data' id='last-bubble-data'>
                        <p>{sessionUser.prepper_description}</p>
                    </div>
                </div>
                <div className="survivor-profile-buttons">
                    <div>
                        <Link to="/update">
                            <button className="survivor-update-button">Update Profile</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <button className="survivor-exit-button">Exit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SurvivorProfile
