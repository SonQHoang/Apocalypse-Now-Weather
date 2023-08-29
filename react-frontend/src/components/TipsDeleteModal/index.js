import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTips } from '../../store/tips';
import './TipsDeleteModal.css'

const DeleteTipsModal = ({ onSubmit, onClose, tipId}) => {
    console.log('is tipId giving me the number I want====> Yes', tipId)
    const modalOverlayRef = useRef();
    const dispatch = useDispatch()

    const handleClickOutside = (e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleConfirmDelete = () => {
        console.log("handleConfirmDelete is called");
        dispatch(deleteTips(tipId))
        onSubmit();
    };

    return (
        <div className="delete-modal-overlay" ref={modalOverlayRef}>
            <div className="delete-modal-content">
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to remove this spot?</p>
                <div className="delete-modal-buttons">
                    <button
                        className="delete-button"
                        onClick={handleConfirmDelete}>
                        Yes (Delete Tip)
                    </button>
                    <button
                        className="cancel-button"
                        onClick={onClose}>
                        No (Keep Tip)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTipsModal