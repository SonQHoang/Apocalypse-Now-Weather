import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, NavLink } from 'react-router-dom'
import * as storyActions from '../../store/stories'
import OpenModalButton from '../OpenModalButton'
import DeleteStoryModal from "../DeleteStoryModal";
import UpdateStoryModal from '../UpdateStoryModal'
import './SingleStory.css'
import StoryComments from "../StoryComment/StoryComments";
import StoryLikesComponent from "../StoryLikes";
import SurvivorProfile from "../SurvivorProfile";
import UpdateStory from "../ManageStories/UpdateStory";
import DeleteStory from "../ManageStories/DeleteStory";

const SingleStoryComponent = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectedStory, setSelectedStory] = useState(null)
    const [modalType, setModalType] = useState(null)
    const currentStory = useSelector((state) => state.stories.singleStory)
    const sessionUser = useSelector((state) => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams()
    // const userId = sessionUser.id

    console.log(currentStory.author)

    useEffect(() => {
        dispatch(storyActions.getOneStory(Number(id)))
        .then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    const handleDeleteClick = async (story) => {
        setSelectedStory(story)
        setModalType("delete")
        setShowModal(true)
        await dispatch(storyActions.getOneStory(id))
    }

    const handleUpdateClick = async (story) => {
        setSelectedStory(story)
        setModalType("update")
        setShowModal(true)
        await dispatch(storyActions.getOneStory(id))
    }

    return (
        <div>
            <div id='single-story-container'>
                <div id='single-story-header'>
                    <div id='title-and-manage-dots-div'>
                        <h1 id='single-story-h1-tag'>{isLoaded && currentStory && currentStory?.title}</h1>
                    </div>
                    {/* <div>
                        <p>By: </p>
                    </div> */}
                        {/* <OpenModalButton buttonText={`${currentStory.author.first_name} ${currentStory.author.last_name}`} /> */}
                    {/* <p className='story-author-name'>By: <NavLink exact to={`/survivors/${currentStory?.author?.id}`} className='author-nav-link'>{isLoaded && currentStory && currentStory?.author?.first_name} {isLoaded && currentStory && currentStory?.author?.last_name}</NavLink> </p> */}
                    <p className='story-author-name'>By: {isLoaded && currentStory && currentStory?.author?.first_name} {isLoaded && currentStory && currentStory?.author?.last_name} </p>

                </div>
                <div id='single-story-body'>
                    <p>{isLoaded && currentStory && currentStory?.body}</p>
                    {(sessionUser && sessionUser.id === currentStory?.author?.id) ? (
                        <div>
                            <button className="story-update-button" onClick={() => {
                                return handleUpdateClick(currentStory)
                            }}>Update</button>
                            <UpdateStory storyId={currentStory.id} />

                            <button className="story-delete-button" onClick={() => {
                                return handleDeleteClick(currentStory)
                            }}>Delete</button>
                            <DeleteStory storyId={currentStory.id} />
                        </div>

                        ) : ''}
                </div>
                <div>
                    {sessionUser ? (
                        <StoryLikesComponent story={currentStory} />
                    ) : ''}
                </div>
            </div>
            <div className="comments-container">
                <StoryComments props={id}/>
            </div>
        </div>
    )
}

export default SingleStoryComponent;
