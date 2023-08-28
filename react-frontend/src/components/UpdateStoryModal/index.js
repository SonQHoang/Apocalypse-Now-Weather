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

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedStory = {
            title: title,
            body: body
        }

        dispatch(storyActions.updateUserStory(story.story.id, updatedStory)).then(closeModal)
        return history.push(`/stories/manage`)
    }

    return (
        <div>
            <div>
                <h1>Update Story</h1>
            </div>
            <form id='create-story-form' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label id='update-story-title-label' htmlFor='title'>Title</label>
                    </div>
                    <div>
                        <input
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Story title'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label id='update-story-body-label' htmlFor='body'>Body</label>
                    </div>
                    <div>
                        <input
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Story body'
                        />
                    </div>
                </div>
                <div>
                    <button type='submit' id='submit-new-story-button'>Submit</button>
                </div>
            </form>
            <div>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default UpdateStoryModal;
