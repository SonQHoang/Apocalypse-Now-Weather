import './StoryHighlights.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as storyActions from '../../store/stories'
import { NavLink } from 'react-router-dom'
import FiveDayForcast from "../FiveDayForcast/fiveDayForcast";

const StoryHighlights = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.allStories);
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(storyActions.getHighlights()).then(() => setIsLoaded(true))
    }, [dispatch])

  const storiesToMap = Object.values(stories);

    return (
        <div id='landing-page-wrapper'>
        <div className="awn_logo_container">
            <div className="awn_logo">
                <img src="https://res.cloudinary.com/dgxpqnbwn/image/upload/v1693530420/AWN_Banner_1_-PhotoRoom.png-PhotoRoom_juuzmy.png" alt="AWN_banner"/>
            </div>
            <FiveDayForcast key={sessionUser.id}/>
        </div>
        <div id='landing-page-description-container'>
            <p>Welcome to Apocalypse Weather Now: Your portal to the world of cataclysmic climate. Explore the awe-inspiring and terrifying weather phenomena that is reshaping our world. From solar flares and sentient clouds to time-skipping storms and fractal rain, delve into a world where Mother Nature's fury knows no bounds.</p>
            <p>Discover these fantastical weather events, their impacts, and the survival stories that emerge from the chaos. Step into a realm where the unpredictable reigns supreme, and prepare to be astonished.</p>
        </div>
        <div id='landing-page-parent'>
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
            <div id='banner-div'>
            <NavLink exact to='/quiz'>
                <img id='landing-page-quiz-banner' src="https://i.ibb.co/fMFWNzL/banner-red-background.png" alt="prepper-type-banner" border="0"></img>
            </NavLink>
            </div>
        </div>
        </div>
    )
}

export default StoryHighlights;
