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
            <h1>Create a New Story</h1>
            <form id='create-story-form' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label id='story-title-label' htmlFor='title'>Title</label>
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
                        <label id='story-body-label' htmlFor='body'>Body</label>
                    </div>
                    <div>
                        <input
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Story body'
                        />
                    </div>
                    {errors && errors.map(err => (
                        <div>{err}</div>
                    ))}
                </div>
                <div>
                    <button type='submit' id='submit-new-story-button'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default CreateNewStory;
