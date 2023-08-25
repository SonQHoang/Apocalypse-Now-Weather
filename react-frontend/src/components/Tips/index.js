import React, { useState } from 'react';
import Navigation from '../Navigation';
import "./tips.css"
import TipsAddModal from '../TipsAddModal';

function Tips() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <div className="tips-container">
                <h1>Testing out the Tips</h1>
            </div>

            <div className="tip-button">
                <button onClick={handleOpenModal}>Add a Tip!</button>
                {isModalOpen && <TipsAddModal onClose={handleCloseModal} />}
            </div>
        </>
    )
}

export default Tips