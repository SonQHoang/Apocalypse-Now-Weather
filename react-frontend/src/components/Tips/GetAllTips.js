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

    const tips = Object.values(useSelector(state => state.tips.allTips))
    // console.log('I currently have 80 tips====>', tips)

    useEffect(() => {
        dispatch(getAllTips());
    }, [dispatch]);

    const handleDeleteClick = (tip) => {
        // console.log("Does the delete button trigger with data?======> Yes", tip);
        setSelectedTip(tip)
        setShowModal(true)
    }

    return (
        <>
            {tips.map(tip => (
                <div onClick={() => history.push(`/tips/${tip.id}`)}
                key={tip.id}
                className="single-tip">
                    <p>{`ID: ${tip.id}`}</p>
                    <p>{`Title: ${tip.title}`}</p>
                    <p>{`Weather Category: ${tip.weather_category}`}</p>
                    <p>{`Body: ${tip.body}`}</p>
            
                </div>
            ))}
        </>
    )
}

export default GetAllTips
