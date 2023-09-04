import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { updateTips } from '../../store/tips';
import { getUserTips } from '../../store/tips';
import './TipsUpdateModal.css'

const UpdateTipsModal = ({ onSubmit, onClose, tipId, tipData}) => {
    const modalOverlayRef = useRef();
    const dispatch = useDispatch()
    const [newTip, setNewTip] = useState(tipData.body)
    const [selectedCategory, setSelectedCategory] = useState("");
    const [newTitle, setNewTitle] = useState(tipData.title);


    const handleClickOutside = useCallback((e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }, [onClose]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])

    const updatedTip = {
        body: newTip,
        title: newTitle,
        category: selectedCategory
    }

    const handleConfirmUpdate = async () => {
        dispatch(updateTips(tipId, updatedTip))
        .then(() => dispatch(getUserTips()))
        onSubmit();
    };

    return (
        <>
        <div className='update-modal-backdrop'></div>
        <div className="update-modal-overlay" ref={modalOverlayRef}>

            <div className="update-modal-content">
                <h2>Update Tip</h2>
                <p>Are you sure you want to update this tip?</p>

            <div className="update-tip-inputs-container">

                <div className="tip-title-input-container">
                    <input
                        placeholder="Title of your tip"
                        type="text"
                        value={newTitle}
                        className="tip-title-input"
                        onChange = {(e) => setNewTitle(e.target.value)}
                        />
                </div>
                <div className="weather-category-container">
                <select
                    className="weather-category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select the Weather Category</option>
                    <option value="Natural_Disasters">Natural Disasters</option>
                    <option value="Supernatural_Phenomena">Supernatural Phenomena</option>
                    <option value="Mystical_Elements">Mystical Elements</option>
                    <option value="Paranormal_Chaos">Paranormal Chaos</option>
                    <option value="Unpredictable Transformations">Unpredictable Transformations</option>
                </select>
                </div>
                <div className='textareacontainer'>
                <textarea className="text-area-input"
                value={newTip}
                onChange = {(e) => setNewTip(e.target.value)}
                >
                </textarea></div>
                <div className="update-modal-buttons">
                    <button
                        className="update-button"
                        onClick={handleConfirmUpdate}>
                        Yes (Update Tip)
                    </button>
                    <button
                        className="cancel-button"
                        onClick={onClose}>
                        No (Keep Tip)
                    </button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default UpdateTipsModal
