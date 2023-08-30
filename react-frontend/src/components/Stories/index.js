import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from '../../store/stories'
import { NavLink } from 'react-router-dom'
import './Stories.css'
import OpenModalButton from '../OpenModalButton'
import DeleteStoryModal from '../DeleteStoryModal'
import UpdateStoryModal from '../UpdateStoryModal'

const StoriesComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const allStories = useSelector(state => state.stories.allStories)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(storyActions.getAllStories()).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, sessionUser])

    const storiesToMap = Object.values(allStories)

    return (
        <>
            <div id='all-stories-container'>
                <h1 id='all-stories-h1'>All Stories</h1>
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
                        <p className='story-author-name-all'>By: {story.author.first_name} {story.author.last_name}</p>
                        <p className='individual-story-body'>{story.body}</p>
                        <div>
                        {(sessionUser && sessionUser.id === story.author.id) ? (
                            <div className='manage-story-buttons-div'>
                                <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={story} />} />
                                <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={story} />} />
                            </div>
                        ): ''}
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default StoriesComponent;
