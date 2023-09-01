const GET_STORIES = '/stories/getStories'
const GET_SINGLE_STORY = '/stories/getSingleStory'
const GET_USER_STORIES = '/stories/getUserStories'
const DELETE_USER_STORY = '/stories/deleteStory'
const UPDATE_USER_STORY = '/stories/updateStory'
const CREATE_NEW_STORY = '/stories/createNewStory'
const GET_STORY_HIGHLIGHTS = '/stories/highlights'

const highlights = (data) => {
    return {
        type: GET_STORY_HIGHLIGHTS,
        payload: data,
    }
}

const getStories = (data) => {
    return {
        type: GET_STORIES,
        payload: data,
    }
}

const getSingleStory = (story) => {
    return {
        type: GET_SINGLE_STORY,
        payload: story,
    }
}

const getUserStories = (data) => {
    return {
        type: GET_USER_STORIES,
        payload: data,
    }
}

const deleteStory = (story) => {
    return {
        type: DELETE_USER_STORY,
        payload: story,
    }
}


const updateStory = (story) => {
    return {
        type: UPDATE_USER_STORY,
        payload: story,
    }
}

const createNewStory = (data) => {
    return {
        type: CREATE_NEW_STORY,
        payload: data,
    }
}

export const getAllStories = () => async (dispatch) => {
    try {
        const response = await fetch('/api/stories/all');
        if(response.ok) {
            const data = await response.json();
            // console.log('data from inside thunk: ', data);
            dispatch(getStories(data));
            return data;
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() };
        return errors;
    }
}

export const getOneStory = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/${Number(id)}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getSingleStory(data))
            return data
        } else {
            const errors = await response.json()
            return errors
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() };
        return errors
    }
}

export const addNewStory = (story) => async (dispatch) => {
    try {
        const request = await fetch('/api/stories/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(story)
        })

        const data = await request.json()
        const createdStory = data
        dispatch(createNewStory(createdStory))
        return createdStory
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getAllUserStories = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/user/${id}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getUserStories(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const updateUserStory = (storyId, updatedStory) => async (dispatch) => {
    try {
        const request = await fetch(`/api/stories/${storyId}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStory)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateStory(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteUserStory = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/stories/${storyId}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteStory(Number(storyId)))
    }

    return response
}

export const getHighlights = () => async (dispatch) => {
    try {
        const response = await fetch('/api/stories/story-highlights');
        if(response.ok) {
            const data = await response.json();
            // console.log('data from inside thunk: ', data);
            dispatch(highlights(data));
            return data;
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() };
        return errors;
    }
}

const initialState = { allStories: {}, singleStory: {}}
const storyReducer = (state=initialState, action) => {
    let newState
    switch(action.type) {
        case GET_STORIES:
            newState = Object.assign({ ...state })
            newState.allStories = action.payload
            return newState
        case GET_SINGLE_STORY:
            newState = Object.assign({ ...state })
            newState.singleStory = action.payload
            return newState
        case CREATE_NEW_STORY:
            newState = Object.assign({ ...state })
            newState.singleStory = action.payload
            return newState
        case GET_USER_STORIES:
            newState = Object.assign({ ...state })
            newState.allStories = action.payload
            return newState
        case UPDATE_USER_STORY:
            newState = Object.assign({ ...state })
            newState.singleSpot = action.payload
            return newState
        case DELETE_USER_STORY:
            newState = Object.assign({ ...state })
            delete newState.allStories[action.payload]
            return newState
        case GET_STORY_HIGHLIGHTS:
            newState = Object.assign({ ...state })
            newState.allStories = action.payload
            return newState
        default:
            return state
    }
}

export default storyReducer
