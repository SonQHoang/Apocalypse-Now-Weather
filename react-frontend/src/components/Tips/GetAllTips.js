import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllTips } from '../../store/tips'
import DeleteTipsModal from '../TipsDeleteModal';
import DeleteTip from './DeleteTips';
import { useEffect, useState } from 'react';
import './tips.css'

function GetAllTips() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectedTip, setSelectedTip] = useState(null)
    // const [ allTips, setAllTips] = useState([])

    const tips = useSelector(state => Object.values(state.tips.allTips))

    useEffect(() => {
        dispatch(getAllTips());
    }, [dispatch]);

    const handleDeleteClick = (tip) => {
        console.log("Delete button clicked for tip:", tip);
        setSelectedTip(tip)
        setShowModal(true)
    }

    return (
        <>
            {tips.map(tip => (
                <>
                <div onClick={() => history.push(`/tips/${tip.id}`)} key={tip.id} className="single-tip">
                    <p>{`ID: ${tip.id}`}</p>
                    <p>{`Title: ${tip.title}`}</p>
                    <p>{`Weather Category: ${tip.weather_category}`}</p>
                    <p>{`Body: ${tip.body}`}</p>
            
                </div>
                    <button onClick={() => handleDeleteClick(tip)}>Delete Tip</button>
                    <DeleteTip tipId={tip.id} />
                    </>
            ))}

            {showModal && (
                <DeleteTipsModal
                tipId={selectedTip.id}
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
