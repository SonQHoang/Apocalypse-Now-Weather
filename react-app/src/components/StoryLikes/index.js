import * as storyLikeActions from '../../store/storyLikes'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StoryLikesComponent = (story) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [isLoaded, setIsLoaded] = useState(false)
    const [gotLikeToDelete, setGotLikeToDelete] = useState(false)

    useEffect(() => {
        dispatch(storyLikeActions.getAllExistingLikes()).then(() => setIsLoaded(true))
    }, [dispatch])

    let storyLikes
    let numLikes



    let likeButton
    if(story.story.likes) {
        storyLikes = Object.values(story.story.likes)
        numLikes = storyLikes.length

    } else {
        storyLikes = []
        numLikes = 0
    }

    const storyLikedInitialState = () => {
        if(numLikes === 0) {
            return false
        }

        const likedState = storyLikes.find(like => like.liker.id === sessionUser.id && like.story.id === story.story.id)
        if(likedState.length !== 0) {
            return true
        } else {
            return false
        }
    }

    const checker = storyLikedInitialState()

    const [isLiked, setIsLiked] = useState(checker)
    const [likesNum, setLikesNum] = useState(numLikes)

    const handleNewLike = () => {
        const newLike = {
            story_id: story.story.id,
            user_id: sessionUser.id
        }
        dispatch(storyLikeActions.addStoryLike(story.story.id, newLike)).then(() => {
            setLikesNum(likesNum + 1)
            setIsLiked(true)
            return
        })
    }

    const handleDeleteLike = () => {
        const grabbedLike = storyLikes.find(like => like.liker.id === sessionUser.id && like.story.id === story.story.id)
        if (grabbedLike) {
            dispatch(storyLikeActions.deleteStoryLike(grabbedLike.id)).then(() => {
                setLikesNum(likesNum - 1)
                setIsLiked(false)
                return
            })
        }
    }

    if(sessionUser) {
        if(isLiked) {
            likeButton = (
                // <button onClick={handleDeleteLike}>Unlike</button>
                <i className="fa-solid fa-thumbs-up fa-lg" onClick={handleDeleteLike}></i>
            )
        } else {
            likeButton = (
                // <button onClick={handleNewLike}>Like</button>
                <i className="fa-regular fa-thumbs-up fa-lg" onClick={handleNewLike}></i>
            )
        }
    }

    return (
        <div id='story-likes-container'>
            <div id='story-likes-container-inner'>
                <div id='story-likes-count-div'>
                    <p>Likes: {likesNum}</p>
                </div>
                <div id='story-likes-button-div'>
                    {likeButton}
                </div>
            </div>
        </div>
    )
}

export default StoryLikesComponent;
