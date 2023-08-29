import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from '../../store/stories'

const StoriesComponent = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const allStories = useSelector(state => state.stories.allStories)
    const stories = useSelector(state => state)


    useEffect(() => {
        dispatch(storyActions.getAllStories()).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, isLoaded])

    const storiesToMap = Object.values(allStories)

    return (
        <>
            <h1>All Stories</h1>
            {storiesToMap && storiesToMap?.map((story) => (
                <div>
                    <h2>{story.title}</h2>
                    <p>{story.body}</p>
                </div>
            ))}
        </>
    )
}

export default StoriesComponent;
