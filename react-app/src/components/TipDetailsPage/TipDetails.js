import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { getTipById } from '../../store/tips'
import TipComments from '../TipComment/TipComments'
import "./TipDetails.css"

function TipDetailsPage() {
    const { tipId } = useParams()
    // console.log('==============>', tipId)
    const sessionUser = useSelector(state => state.session.user)
    // console.log('sessionuser=========>', sessionUser.username)
    const dispatch = useDispatch()
    const tip = useSelector((state) => state.tips.singleTip)
    // console.log('Do I see any tips?====> Yes', tip)

    useEffect(() => {
        dispatch(getTipById(tipId))
    }, [dispatch, tipId])

    if (!tip) {
        return <div>Tip Not Found</div>
    }
    return (
        <>
            <div className="tip-details-container">
                <div className="tip-details-header">
                <div className="single-tip-h1-tag">
                    <h1 className="tip-details-title">{tip.title}</h1>
                </div>
                <div>
                    <h3 className="tip-details-weather-category">{tip.weather_category}</h3>
                </div>
                <div className="single-tip-author">
                        <p>By: <NavLink exact to={`/survivors/${sessionUser.id}`} className='author-nav-link'>{sessionUser.username}</NavLink></p>
                </div>
                </div>
                <div>
                    <p className="tip-details-body">{tip.body}</p>
                </div>
            </div>
            <div className='tip-comments'>
                <TipComments props={tipId} />
            </div>
        </>
    )
}

export default TipDetailsPage
