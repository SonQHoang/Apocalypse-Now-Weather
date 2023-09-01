import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTips } from '../../store/tips';
import { getUserTips } from '../../store/tips';
import './TipsUpdateModal.css'

const UpdateTipsModal = ({ onSubmit, onClose, tipId, tipData}) => {
    // console.log('is tipId giving me the number I want====> Yes', tipId)
    // console.log('Am I getting tipData =====>',  tipData)
    const modalOverlayRef = useRef();
    const dispatch = useDispatch()
    const [newTip, setNewTip] = useState(tipData.body)
    const [selectedCategory, setSelectedCategory] = useState("");
    const [newTitle, setNewTitle] = useState(tipData.title);


    const handleClickOutside = (e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [useEffect])

    const updatedTip = {
        body: newTip,
        title: newTitle,
        category: selectedCategory
    }

    const handleConfirmUpdate = async () => {
        // console.log("Does pressing confirm delete send the data=====> Yes", tipId);
        dispatch(updateTips(tipId, updatedTip))
        // getUserTips is triggering the re-render
        // .then waits til the the delete is done. Then fires to get all of the User's tips
        .then(() => dispatch(getUserTips()))
        onSubmit();
    };

    return (
        <div className="update-modal-overlay" ref={modalOverlayRef}>
            <div className="update-modal-content">
                <h2>Confirm Update</h2>
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
                <textarea className="text-area-input"
                value={newTip}
                onChange = {(e) => setNewTip(e.target.value)}
                >
                </textarea>
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
    );
};

export default UpdateTipsModal