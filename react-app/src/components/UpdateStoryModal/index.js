import React, { useState } from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch } from 'react-redux'
import { useModal } from '../../context/Modal.js'
import { useHistory } from 'react-router-dom'
import './UpdateStoryModal.css'

const UpdateStoryModal = (story) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    const [title, setTitle] = useState(story.story.title)
    const [body, setBody] = useState(story.story.body)
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedStory = {
            title: title,
            body: body
        }

        dispatch(storyActions.updateUserStory(story.story.id, updatedStory)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                closeModal()
            }
        })
        return history.push(`/stories/manage`)
    }

    return (
        <div id='update-story-modal-container'>
            <div id='update-story-modal-header'>
                <h1>Update Story</h1>
            </div>
            <form id='update-create-story-form' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <p id='update-story-title-label'>Title</p>
                    </div>
                    <div>
                        <input
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Story title'
                        id='update-story-title-input'
                        />
                    </div>
                    <div>{errors?.errors?.title}</div>
                </div>
                <div>
                    <div>
                        <p id='update-story-body-label' htmlFor='body'>Body</p>
                    </div>
                    <div>
                        <textarea
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Story body'
                        id='update-story-body-input'
                        />
                    </div>
                    <div>{errors?.errors?.body}</div>
                </div>
                {errors && errors.map(err => (
                    <div>{err}</div>
                ))}
                <div id='update-story-button-container'>
                    <button type='submit' id='submit-updated-story-button'>Submit</button> <button id='cancel-story-update-button' onClick={closeModal}>Cancel</button>
                </div>
            </form>
            {/* <div>
                <button onClick={closeModal}>Cancel</button>
            </div> */}
        </div>
    )
}

export default UpdateStoryModal;
