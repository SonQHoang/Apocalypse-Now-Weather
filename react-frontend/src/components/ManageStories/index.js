import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import * as storyActions from '../../store/stories'
import OpenModalButton from "../OpenModalButton";
import UpdateStoryModal from '../UpdateStoryModal';
import DeleteStoryModal from "../DeleteStoryModal";
import './ManageStories.css'
import { NavLink } from 'react-router-dom'

const ManageStories = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const userStories = useSelector(state => state.stories.allStories)

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    const storiesToMap = Object.values(userStories)

    useEffect(() => {
        dispatch(storyActions.getAllUserStories(userId)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded, userStories])


    return (
        <>
            <div id='all-stories-container'>
                <h1 id='all-stories-h1'>Manage Your Stories</h1>
                {sessionUser !== null ? (
                    <NavLink exact to='/stories/new'>
                        <button id='create-new-story-button-main'>Create New Story</button>
                    </NavLink>
                ) : ''}
                </div>
                {isLoaded && storiesToMap && storiesToMap?.map((story) => (
                    <>
                        <div className='individual-story-container'>
                            <NavLink exact to={`/stories/${story.id}`} className='story-title-link'><h2 className='individual-story-title'>{story.title}</h2></NavLink>
                            <p className='story-author-name'>By: {sessionUser.first_name} {sessionUser.last_name}</p>
                            <p className='individual-story-body'>{story.body}</p>
                            <div>
                                <div className='manage-story-buttons-div'>
                                    <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={story} />} />
                                    <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={story} />} />
                                </div>
                            </div>
                        </div>
                    </>
                ))}
        </>
    )
}

export default ManageStories;
