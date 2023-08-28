import React, { useState } from 'react';
// import Navigation from '../Navigation';
import "./tips.css"
import TipsAddModal from '../TipsAddModal';
import GetAllTips from './GetAllTips';

function Tips() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [submittedTips, setSubmittedTips] = useState([])

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleAddTip = (newTip) => {
        setSubmittedTips([...submittedTips, newTip])
    }

    return (
        <>
            <div className="tips-container">
            <div className="tip-button">
                <button onClick={handleOpenModal}>Add a Tip!</button>
                {isModalOpen && <TipsAddModal onClose={handleCloseModal} onAddTip={handleAddTip} />}
            </div>

            <div className="submitted-tips">
                <h2>Submitted Tips:</h2>
                <ul>
                    {submittedTips.map((tip, index) => (
                        <li key={index}>
                            <div className="tip-content">
                                {tip.title}<br />
                                {tip.weather_category}<br />
                                {tip.tip}
                            </div>
                        </li>
                    ))}
            </ul>
        </div >

        <div className="all-tips">
                <ul>
                    <GetAllTips />
                </ul>
            </div>
            </div>
        </>
    )
}

export default Tips