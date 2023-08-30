import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllTips } from '../../store/tips'
import { useEffect, useState } from 'react';
import './tips.css'

function GetAllTips() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [selectedTip, setSelectedTip] = useState(null)
    const user = useSelector(state => state.session.user)

    const tips = Object.values(useSelector(state => state.tips.allTips))
    // console.log('What info am I getting back from tips====>', tips)

    useEffect(() => {
        dispatch(getAllTips());
    }, [dispatch]);

    const handleDeleteClick = (tip) => {
        // console.log("Does the delete button trigger with data?======> Yes", tip);
        setSelectedTip(tip)
        setShowModal(true)
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="tips-list-container">
            {tips.map(tip => (
                <div onClick={() => history.push(`/tips/${tip.id}`)}
                    key={tip.id}
                    className="single-tip">

                    <div className="user-info-container">
                        <div className="user-info-section">
                            <p>{user.username}</p>
                        </div>
                        <div className="user-info-section">
                            <p>{formatDate(tip.date_created)}</p>
                        </div>
                    </div>
                    <div className="tip-info-container">
                        <div className="tip-info">
                            {/* <p>{`ID: ${tip.user_id}`}</p> */}
                            <p className="tip-title">{`${tip.title}`}</p>
                            <p className="tip-weather-category">{`${tip.weather_category}`}</p>
                            <p className="tip-body">{`${tip.body}`}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default GetAllTips
