import React from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch } from 'react-redux'
import { useModal } from '../../context/Modal.js'
import './DeleteStoryModal.css'

const DeleteStoryModal = (story) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(storyActions.deleteUserStory(story.story.id)).then(closeModal)
    }

    return (
        <div id='delete-story-modal-container'>
            <div id='delete-story-modal-header'>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to permanently delete this story?</p>
            </div>
            <form onSubmit={handleSubmit} id='delete-story-modal-form'>
                <div id='delete-story-modal-buttons'>
                    <button id='delete-story-yes-button' type='submit'>Yes (Delete Story)</button>
                    <button id='delete-story-no-button' onClick={closeModal}>No (Keep Story)</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteStoryModal;
