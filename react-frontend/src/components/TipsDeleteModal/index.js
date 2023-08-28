import React, { useEffect, useRef } from 'react'
import './TipsDeleteModal.css'

const DeleteTipsModal = ({onSubmit, onClose}) => {
    const modalOverlayRef = useRef()

    const handleClickOutside = (e) => {
        if (modalOverlayRef.current === e.target) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="delete-modal-overlay" ref={modalOverlayRef}>
            <div className="delete-modal-content">
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete this tip?</p>
                <div className="delete-modal-buttons">
                    <button
                    className="delete-button"
                    onClick={onSubmit}>
                        {'Yes (Delete Tip)'}
                    </button>
                    <button className="cancel-button"
                    onClick={onClose}>
                        {'No (Keep Tip)'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTipsModal