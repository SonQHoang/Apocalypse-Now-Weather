import './FiveDayForcast.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from '../../store/userLocation'


const FiveDayForcast = () =>{
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getLocation())
    }, [dispatch, sessionUser])



    return (
        <>
            <h1>5 Day Forcast</h1>
            <div className='forcast-container'>
                <div className='forcast-container-today'>Today</div>
                <div className='forcast-container-tomorrow'>Tomorrow</div>
                <div className='forcast-container-day3'>Day 3</div>
                <div className='forcast-container-day4'>Day 4</div>
                <div className='forcast-container-day5'>Day 5</div>
            </div>
        </>
    )
}


export default FiveDayForcast;
