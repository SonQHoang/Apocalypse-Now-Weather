import React, { useEffect, useRef } from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../context/Modal.js'
// import './DeleteStoryModal.css'
import { useHistory } from 'react-router-dom'

const DeleteModal = ({ onSubmit, onClose, storyId }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const modalOverlayRef = useRef()
    const { closeModal } = useModal()
    const history = useHistory()

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

    const handleSubmit = () => {
        dispatch(storyActions.deleteUserStory(storyId)).then(() => {
            return history.push('/stories')
        })
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
                    <button id='delete-story-yes-button' type='submit'>Yes (Delete Story)</button>
                    <button id='delete-story-no-button' onClick={onClose}>No (Keep Story)</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteModal;
