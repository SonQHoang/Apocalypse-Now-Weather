import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as storyActions from '../../store/stories'
import OpenModalButton from '../OpenModalButton'
import DeleteStoryModal from "../DeleteStoryModal";
import UpdateStoryModal from '../UpdateStoryModal'
import './SingleStory.css'

const SingleStoryComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams()

    const currentStory = useSelector((state) => state.storyReducer.singleStory)
    const sessionUser = useSelector((state) => state.session.user)

    let manageStoryButtons

    useEffect(() => {
        dispatch(storyActions.getOneStory(id)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    if(sessionUser.id === currentStory.id) {
        manageStoryButtons = (
            <div>
                <OpenModalButton buttonText='Update' modalComponent={<UpdateStoryModal story={currentStory} />} />
                <OpenModalButton buttonText='Delete' modalComponent={<DeleteStoryModal story={currentStory} />} />
            </div>
        )
    } else {
        manageStoryButtons = ''
    }

    return (
        <>
            <div>
                <h1>{isLoaded && currentStory && currentStory?.title}</h1>
                <p>{isLoaded && currentStory && currentStory?.body}</p>
                {manageStoryButtons}
            </div>
        </>
    )
}

export default SingleStoryComponent;
