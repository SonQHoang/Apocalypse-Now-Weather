import React, { useState } from 'react';
import TipsAddModal from '../TipsAddModal';
import GetAllTips from './GetAllTips';
import "./tips.css"

function Tips() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [submittedTips, setSubmittedTips] = useState([])


    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleAddTip = (newTip) => {
        setSubmittedTips([...submittedTips, newTip])
    }

    return (
        <>
            <div className="tips-container">
                <div className="manage-tips-title">
                    <h1>Manage Your Tips!</h1>
                </div>
                <div className="tip-button">
                    <button className="submit-tip-button" onClick={handleOpenModal}>Add a Tip!</button>
                    {isModalOpen && <TipsAddModal onClose={handleCloseModal} onAddTip={handleAddTip} />}
                </div>

                <div className="all-tips">
                    <ul>
                        <GetAllTips onAddTip={handleAddTip} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tips