import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as storyActions from '../../store/stories'
import OpenModalButton from '../OpenModalButton'
import DeleteStoryModal from "../DeleteStoryModal";
import UpdateStoryModal from '../UpdateStoryModal'
import './SingleStory.css'
import StoryComments from "../StoryComment/StoryComments";

const SingleStoryComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams()

    const currentStory = useSelector((state) => state.stories.singleStory)
    const sessionUser = useSelector((state) => state.session.user)

    let manageStoryButtons

    useEffect(() => {
        dispatch(storyActions.getOneStory(id)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    if(sessionUser.id === currentStory.id) {
        manageStoryButtons = (
            <div className='manage-story-buttons-div'>
                <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={currentStory} />} />
                <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={currentStory} />} />
            </div>
        )
    } else {
        manageStoryButtons = ''
    }

    return (
        <>
            <div id='single-story-container'>
                <div id='single-story-header'>
                    <h1 id='single-story-h1-tag'>{isLoaded && currentStory && currentStory?.title}</h1>
                    <p className='story-author-name'>By: {isLoaded && currentStory && currentStory?.author?.first_name} {isLoaded && currentStory && currentStory?.author?.last_name}</p>
                </div>
                <div id='single-story-body'>
                    <p>{isLoaded && currentStory && currentStory?.body}</p>
                    {manageStoryButtons}
                </div>
            </div>
            <div className="comments-container">
                <StoryComments props={id}/>
            </div>
        </>
    )
}

export default SingleStoryComponent;
