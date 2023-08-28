import React, { useState } from 'react';
// import Navigation from '../Navigation';
import "./tips.css"
import TipsAddModal from '../TipsAddModal';
import GetAllTips from './GetAllTips';

function Tips() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [submittedTips, setSubmittedTips] = useState([])

    console.log('These are the new tips that users are creating====>', submittedTips)

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

        {/* <div className="submitted-tips">
                <h2>Submitted Tips:</h2>
                    {submittedTips.map((tip) => (
                            <div className="tip-content" key={tip.id}>
                                <p>Title: {tip.title}</p>
                                <p>Weather Category: {tip.weather_category}</p>
                                <p>Body: {tip.body}</p>
                            </div>
                    ))}
        </div > */}

        <div className="all-tips">
                <ul>
                    <GetAllTips onAddTip={handleAddTip}/>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Tips