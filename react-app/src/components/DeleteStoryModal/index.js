import React, { useEffect, useRef } from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../context/Modal.js'
import './DeleteStoryModal.css'

const DeleteStoryModal = ({ onSubmit, onClose, storyId }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const modalOverlayRef = useRef()
    const { closeModal } = useModal()

    const handleClickOutside = (e) => {
        if(modalOverlayRef.current === e.target) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

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
        <div id='delete-story-modal-container' ref={modalOverlayRef}>
            <div id='delete-story-modal-header'>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to permanently delete this story?</p>
            </div>
            <form onSubmit={handleSubmit} id='delete-story-modal-form'>
                <div id='delete-story-modal-buttons'>
<<<<<<< HEAD
                    <button id='delete-story-button' className="delete-story-button-yes" type='submit'>Yes (Delete Story)</button>
                    <button id='delete-story-button' onClick={closeModal}>No (Keep Story)</button>
=======
                    <button id='delete-story-yes-button' type='submit'>Yes (Delete Story)</button>
                    <button id='delete-story-no-button' onClick={onClose}>No (Keep Story)</button>
>>>>>>> 6a0f18a9db94553f4d7b22202447fcf3fe692686
                </div>
            </form>
        </div>
    )
}

export default DeleteStoryModal;
