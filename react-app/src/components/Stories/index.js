import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from '../../store/stories'
import { NavLink } from 'react-router-dom'
import './Stories.css'
import StoryLikesComponent from '../StoryLikes'
import FiveDayForcast from "../FiveDayForcast/fiveDayForcast";

const StoriesComponent = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const allStories = useSelector((state) => state.stories.allStories);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(storyActions.getAllStories()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch, sessionUser]);

  const storiesToMap = Object.values(allStories);

  return (
    <>
      <div id="all-stories-container">
        <h1 id="all-stories-h1">All Stories</h1>
        {sessionUser !== null ? (
          <NavLink exact to="/stories/new">
            <button id="create-new-story-button-main">Create New Story</button>
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div></div>
      {isLoaded &&
        storiesToMap &&
        storiesToMap?.map((story) => (
          <>
            <div id="single-story-container">
              <div id="single-story-header">
                <div id="title-and-manage-dots-div-allStories">
                  <NavLink
                    exact
                    to={`/stories/${story.id}`}
                    className="story-title-link"
                  >
                    <h2 className="individual-story-title">{story.title}</h2>
                  </NavLink>
                  <p className="story-author-name-all">
                    By: {story.author.first_name} {story.author.last_name}
                  </p>
                  {sessionUser && sessionUser.id === story?.author?.id ? (
                    <div id="allStories-manage-button">
                      <NavLink
                        exact
                        to={`/stories/${story.id}`}
                        className="individual-story-manage-link"
                      >
                        <button className="individual-story-manage-link-button">
                          Manage Story
                        </button>
                      </NavLink>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div id="single-story-body">
                <p className="individual-story-body">{story.body}</p>
              </div>
              {/* <div id='story-likes-container'>
                            {sessionUser ? (<StoryLikesComponent story={story} />) : ''}

                        </div> */}
            </div>
          </>
        ))}
    </>
  );
};

export default StoriesComponent;
