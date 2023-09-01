import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import * as storyActions from '../../store/stories'
import OpenModalButton from "../OpenModalButton";
import UpdateStoryModal from '../UpdateStoryModal';
import DeleteStoryModal from "../DeleteStoryModal";
import './ManageStories.css'
import { NavLink } from 'react-router-dom'
import DeleteStory from "./DeleteStory";
import UpdateStory from "./UpdateStory";

const ManageStories = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedStory, setSelectedStory] = useState(null)
    const [modalType, setModalType] = useState(null)
    const dispatch = useDispatch()
    const userStories = useSelector(state => state.stories.allStories)

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    const storiesToMap = Object.values(userStories)

    useEffect(() => {
        dispatch(storyActions.getAllUserStories(userId)).then(() => setIsLoaded(true))
    }, [dispatch])

    const handleDeleteClick = async (story) => {
        setSelectedStory(story)
        setModalType("delete")
        setShowModal(true)
        await dispatch(storyActions.getAllUserStories(userId))
    }

    const handleUpdateClick = async (story) => {
        setSelectedStory(story)
        setModalType("update")
        setShowModal(true)
        await dispatch(storyActions.getAllUserStories(userId))
    }

    return (
        <div id='all-stories-wrapper'>
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
                        <div id='single-story-container'>
                            <div id='single-story-header'>
                                <div id="title-and-manage-dots-div-allStories">
                                    <NavLink exact to={`/stories/${story.id}`} className='story-title-link'><h2 className='individual-story-title'>{story.title}</h2></NavLink>
                                    {/* <p className='story-author-name'>By: {sessionUser.first_name} {sessionUser.last_name}</p> */}
                                </div>
                            </div>
                            <div id='single-story-body'>
                                <p className='individual-story-body'>{story.body}</p>
                            </div>
                            <div>
                                <button className="story-update-button" onClick={() => {
                                    return handleUpdateClick(story)
                                }}>Update</button>
                                <UpdateStory storyId={story.id} />

                                <button className="story-delete-button" onClick={() => {
                                    return handleDeleteClick(story)
                                }}>Delete</button>
                                <DeleteStory storyId={story.id} />
                                {/* <div className='manage-story-buttons-div'>
                                    <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={story} />} />
                                    <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={story} />} />
                                </div> */}
                            </div>
                        </div>
                    </>
                ))}
                {showModal && modalType === "delete" && (
                    <DeleteStoryModal storyId={selectedStory.id}
                    onSubmit={() => {
                        setShowModal(false)
                        setSelectedStory(null)
                        setModalType(null)
                    }}
                    onClose={() => {
                        setShowModal(false)
                        setSelectedStory(null)
                        setModalType(null)
                    }}
                    />
                )}

                    {showModal && modalType === "update" && (
                    <UpdateStoryModal
                    storyId={selectedStory.id}
                    storyData={selectedStory}
                    onSubmit={() => {
                        setShowModal(false)
                        setSelectedStory(null)
                        setModalType(null)
                    }}
                    onClose={() => {
                        setShowModal(false)
                        setSelectedStory(null)
                        setModalType(null)
                    }}
                    />
                )}
        </div>
    )
}

export default ManageStories;
