import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllTips } from '../../store/tips'
import DeleteTipsModal from '../TipsDeleteModal';
import { useEffect, useState } from 'react';
import './tips.css'

function GetAllTips() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectedTip, setSelectedTip] = useState(null)
    // const [ allTips, setAllTips] = useState([])

    useEffect(() => {
        dispatch(getAllTips())
    }, [dispatch])

    const tips = useSelector(state => Object.values(state.tips.allTips))
    // console.log('I want to get all the tips here======>', tips)


    const handleDeleteClick = (tip) => {
        setSelectedTip(tip)
        setShowModal(true)
    }

    return (
        <>
            {tips.map(tip => (
                <Link to={`/tips/${tip.id}`} key={tip.id} className="single-tip">
                    {/* <p>{`ID: ${tip.id}`}</p> */}
                    <p>{`Title: ${tip.title}`}</p>
                    <p>{`Weather Category: ${tip.weather_category}`}</p>
                    <p>{`Body: ${tip.body}`}</p>
                    <button onClick={() => handleDeleteClick(tip)}>Delete Tip</button>
                </Link>
            ))}

            {showModal && (
                <DeleteTipsModal
                    onSubmit={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                    }}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                    }}
                />
            )}
        </>
    )
}

export default GetAllTips
