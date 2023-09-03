import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
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

    // const formatDate = (dateString) => {
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(dateString).toLocaleDateString(undefined, options)
    // }

    return (
        <>
            <div className="all-tips-header-container">
                <h1>All Tips</h1>
                {user !== null ? (
                    <NavLink exact to='/tips/new'>
                        <button className="create-new-tip-button">Create a New Tip</button>
                    </NavLink>
                ) : null}
            </div>

            <div className="all-single-tips-container">

            {tips.map(tip => (
                <div
                    key={tip.id}
                >
                    {/* <div className="user-info-container">
                        <div className="user-info-section">
                            <p>{formatDate(tip.date_created)}</p>
                        </div>
                    </div> */}
                    <div className="single-tip-container" onClick={() => {
                        if (user !== null) {
                            history.push(`/tips/${tip.id}`)
                        }
                    }} >
                        <div className="single-tip-header">
                            <h2 className="single-tip-title">{`${tip.title}`}</h2>
                            <h3 className="single-tip-weather-category">{`${tip.weather_category}`}</h3>
                            <p className="single-tip-author">{user ? <p> By: {user.username}</p> : null}</p>
                        </div>
                        <div className="tip-body-container">
                            <p className="tip-body">{`${tip.body}`}</p>
                        </div>
                    </div>
                </div>
            ))}
                        </div>
        </>
    );
}

export default GetAllTips
