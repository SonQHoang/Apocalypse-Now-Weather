import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as storyActions from '../../store/stories'

const SingleStoryComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams()

    const currentStory = useSelector((state) => state.storyReducer.singleStory)

    // console.log(id, typeof id)

    useEffect(() => {
        dispatch(storyActions.getOneStory(id)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    return (
        <>
            <div>
                <h1>{isLoaded && currentStory && currentStory?.title}</h1>
                <p>{isLoaded && currentStory && currentStory?.body}</p>
            </div>
        </>
    )
}

export default SingleStoryComponent;
