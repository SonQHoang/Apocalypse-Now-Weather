import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from '../../store/stories'
import { NavLink } from 'react-router-dom'
import './Stories.css'

const StoriesComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const allStories = useSelector(state => state.storyReducer.allStories)

    useEffect(() => {
        dispatch(storyActions.getAllStories()).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    const storiesToMap = Object.values(allStories)

    return (
        <>
            <div>
                <h1>All Stories</h1>
                <NavLink exact to='/stories/new'>
                    <button>Create New Story</button>
                </NavLink>
            </div>
            {isLoaded && storiesToMap && storiesToMap?.map((story) => (
                <div>
                    <NavLink exact to={`/stories/${story.id}`}><h2>{story.title}</h2></NavLink>
                    <p>{story.body}</p>
                </div>
            ))}
        </>
    )
}

export default StoriesComponent;
