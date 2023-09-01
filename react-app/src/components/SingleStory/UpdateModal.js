import React, { useState, useEffect, useRef } from 'react'
import * as storyActions from '../../store/stories'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import './UpdateStoryModal.css'

const UpdateModal = ({ onSubmit, onClose, storyId, storyData }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [title, setTitle] = useState(storyData.title)
    const [body, setBody] = useState(storyData.body)
    const [errors, setErrors] = useState([])

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

    const handleSubmit =  async () => {
        const updatedStory = {
            title: title,
            body: body
        }

        dispatch(storyActions.updateUserStory(storyId, updatedStory)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                dispatch(storyActions.getOneStory(storyId))
                return history.push(`/stories/${storyId}`)
            }
        })
        return onSubmit()
    }

    return (
        <div id='update-story-modal-container'>
            <div id='update-story-modal-header'>
                <h1>Update Story</h1>
            </div>
            <form id='update-create-story-form' onSubmit={handleSubmit}>
                <div>
                    <div id='update-st-title-label-div'>
                        <label id='update-story-title-label'>Title</label>
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
                    <div id='update-st-body-label-div'>
                        <label id='update-story-body-label' htmlFor='body'>Body</label>
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
                    <button type='submit' id='submit-updated-story-button' onClick={handleSubmit}>Submit</button> <button id='cancel-story-update-button' onClick={onClose}>Cancel</button>
                </div>
            </form>
            {/* <div>
                <button onClick={closeModal}>Cancel</button>
            </div> */}
        </div>
    )
}

export default UpdateModal;
