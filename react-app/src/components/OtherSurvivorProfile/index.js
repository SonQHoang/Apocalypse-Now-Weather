import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './OtherSurvivorProfile.css'

const OtherSurvivorProfile = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [userData, setUserData] = useState({})

    // const { id } = useParams()
    const sessionUser = useSelector(state => state.session.user)

    const grabUser = async () => {
        const res = await fetch(`/api/users/survivor/${sessionUser.id}`)
        console.log('What is res======>', res)
        if (res.ok) {
            const data = await res.json()
            setIsLoaded(true)
            setUserData(data)
            return
        }
        return "ERROR"
    }

    useEffect(() => {
        grabUser(sessionUser.id)
        return
    }, [])

    return (
        <div id='survivor-profile-wrapper'>
            <div id='survivor-profile-container'>
                <div className='profile-item-container' id='first-profile-item'>
                    <h2>{isLoaded && userData?.first_name} {isLoaded && userData?.last_name}</h2>
                </div>
                <div className='profile-item-container' id='second-profile-item'>
                    <h3>@{isLoaded && userData?.username}</h3>
                </div>
                <div className='profile-item-container bubble-container' id='first-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Bio</h3>
                    </div>
                    <div className='bubble-container-data' id='first-bubble-data'>
                        <p>{isLoaded && userData?.bio}</p>
                    </div>
                </div>
                <div className='profile-item-container bubble-container' id='second-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Prepper Type: </h3>
                    </div>
                    <div className='bubble-container-data' id='second-bubble-data'>
                        <p>{isLoaded && userData?.prepper_type}</p>
                    </div>
                </div>
                <div className='profile-item-container bubble-container' id='third-bubble-container'>
                    <div className='bubble-container-header'>
                        <h3>Prepper Description</h3>
                    </div>
                    <div className='bubble-container-data' id='last-bubble-data'>
                        <p>{isLoaded && userData?.prepper_description}</p>
                    </div>
                </div>
                <div id="survivor-profile-buttons-container">
                    <div id='survivor-profile-update-container'>
                        <a href='/update'><button id='survivor-profile-update-button'>Update Profile</button></a>
                    </div>
                    <div id='survivor-profile-exit-container'>
                        <a href='/'><button id='survivor-profile-exit-button'>Exit</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherSurvivorProfile;
