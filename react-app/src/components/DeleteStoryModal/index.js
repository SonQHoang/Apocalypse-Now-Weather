import React, { useEffect, useRef, useCallback } from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../context/Modal.js'
import './DeleteStoryModal.css'

const DeleteStoryModal = ({ onSubmit, onClose, storyId }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const modalOverlayRef = useRef();
    const { closeModal } = useModal()

    const handleClickOutside = useCallback((e) => {
        if (modalOverlayRef.current === e.target) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(storyActions.deleteUserStory(storyId)).then(closeModal)
    // }

    const handleSubmit = async () => {
        dispatch(storyActions.deleteUserStory(storyId))
        .then(() => dispatch(storyActions.getAllUserStories(sessionUser.id)))
        onSubmit()
    }

    return (
        <>
        <div className='story-delete-modal-backdrop'></div>
        <div className="delete-modal-overlay" ref={modalOverlayRef}>
        <div id='delete-story-modal-container'>
            <div id='delete-story-modal-header'>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to permanently delete this story?</p>
            </div>
            <form onSubmit={handleSubmit} id='delete-story-modal-form'>
                <div id='delete-story-modal-buttons'>
                    <button id='delete-story-yes-button' type='submit'>Yes (Delete Story)</button>
                    <button id='delete-story-no-button' onClick={onClose}>No (Keep Story)</button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}

export default DeleteStoryModal;
