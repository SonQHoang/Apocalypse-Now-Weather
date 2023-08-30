import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTipById } from '../../store/tips'
import TipComments from '../TipComment/TipComments'

function TipDetailsPage() {
    // console.log('what does tips look like===>', tips)
    const { tipId } = useParams()

    const dispatch = useDispatch()
    const tip = useSelector((state) => state.tips.singleTip)
    console.log('Do I see any tips?====> Yes', tip)

    useEffect(() => {
        dispatch(getTipById(tipId))
    }, [dispatch, tipId])

    if (!tip) {
        return <div>Tip Not Found</div>
    }
    return (
        <>
        <div>
            <h1>The Tip Details Page</h1>
            <h2>{tip.title}</h2>
            <p>Weather Category: {tip.weather_category}</p>
            <p>Body: {tip.body}</p>
            <button>Comment on this Tip!</button>
        </div>
        <div className='tip-comments'>
            <TipComments props={tipId}/>
        </div>
        </>
    )
}

export default TipDetailsPage
