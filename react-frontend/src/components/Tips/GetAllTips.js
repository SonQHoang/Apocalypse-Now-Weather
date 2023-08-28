import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllTips } from '../../store/tips'
import { useEffect } from 'react';

function GetAllTips() {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTips())
    }, [dispatch])

    const tips = useSelector(state => Object.values(state.tips.allTips))
    // console.log('I want to get all the tips here======>', tips)

    return (
        <>
            {tips.map(tip => (
                <div key={tip.id}>
                    <p>{`Title: ${tip.title}`}</p>
                    <p>{`Weather Category: ${tip.weather_category}`}</p>
                    <p>{`Body: ${tip.body}`}</p>
                </div>
            ))}
        </>
    )
}

export default GetAllTips
