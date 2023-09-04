import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as storyActions from '../../store/stories'
import { useHistory } from 'react-router-dom'
import './CreateNewStory.css'

const CreateNewStory = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)


    const reset = () => {
        setTitle('')
        setBody('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let storyId

        const new_story = {
            user_id: sessionUser.id,
            title: title,
            body: body,
        }

        // console.log(new_story)
        dispatch(storyActions.addNewStory(new_story)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                storyId = res.id
                reset()
                return history.push(`/stories/${storyId}`)
            }
        })
    }

    return (
        <>
        {/* <div className='update-modal-backdrop'></div> */}
        <div id='create-new-story-form-container'>
            <form id='create-story-form' onSubmit={handleSubmit}>
                <h1 id='create-new-story-form-header-h1'>Create a New Story</h1>
                <div>
                    <div id='story-title-label-container'>
                        <label id='story-title-label' htmlFor='title'>Title</label>
                    </div>
                    <div id='story-title-input-container'>
                        <input
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Story title'
                        id='story-title-input'
                        />
                    </div>
                </div>
                <div id='story-body-label-container'>
                    <div>
                        <label id='story-body-label' htmlFor='body'>Body</label>
                    </div>
                    <div id='story-body-input-container'>
                        <textarea
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Story body'
                        id='story-body-input'
                        />
                    </div>
                    <div id='story-form-errors-div'>
                        {errors && errors.map(err => (
                            <p className='story-form-error'>{err}</p>
                        ))}
                    </div>
                </div>
                <div id='story-form-submit-container'>
                    <button type='submit' id='submit-new-story-button'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default CreateNewStory;
