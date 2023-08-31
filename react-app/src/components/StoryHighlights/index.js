import './StoryHighlights.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as storyActions from '../../store/stories'
import { NavLink } from 'react-router-dom'

const StoryHighlights = () => {
    const dispatch = useDispatch()
    const stories = useSelector(state => state.stories.allStories)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(storyActions.getAllStories()).then(() => setIsLoaded(true))
    })

    const storiesToMap = Object.values(stories)

    return (
        <div id='story-highlights-parent'>
            <h2 id='story-highlights-header'>Trending Stories</h2>
            <div id='story-highlights-container'>
                {isLoaded && storiesToMap && storiesToMap?.map(story => (
                    <div id='individual-story-preview-container'>
                        <div id='story-highlights-title-div'>
                            <NavLink exact to={`/stories/${story.id}`} className='story-title-link-preview'><h3 className='individual-story-title-preview'>{story.title}</h3></NavLink>
                        </div>
                        <div id='single-story-body-container'>
                            <p id='story-highlights-author-text'>By: {story.author.first_name} {story.author.last_name}</p>
                            <p id='story-highlights-body-preview'>{story.body.slice(0, 110)}</p>
                            <NavLink exact to={`/stories/${story.id}`} className='story-preview-read-more'>
                                <p>Read more...</p>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoryHighlights;