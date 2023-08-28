import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import * as storyActions from '../../store/stories'
import OpenModalButton from "../OpenModalButton";
import UpdateStoryModal from '../UpdateStoryModal';
import DeleteStoryModal from "../DeleteStoryModal";
import './ManageStories.css'

const ManageStories = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const userStories = useSelector(state => state.storyReducer.allStories)

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    // console.log(userId, typeof userId)
    // console.log(userStories)
    const storiesToMap = Object.values(userStories)

    useEffect(() => {
        dispatch(storyActions.getAllUserStories(userId)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded, userStories])


    return (
        <>
            <div>
                {isLoaded && storiesToMap && storiesToMap?.map((story) => (
                    <div>
                        <h2>{story.title}</h2>
                        <p>{story.body}</p>
                        <div>
                            <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={story} />} />
                            <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={story} />} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ManageStories;
