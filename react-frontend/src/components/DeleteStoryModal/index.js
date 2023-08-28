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
        <div>
            <div>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to permanently delete this story?</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <button type='submit'>Yes</button>
                </div>
                <div>
                    <button onClick={closeModal}>No</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteStoryModal;
