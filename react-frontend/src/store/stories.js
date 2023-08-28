const GET_STORIES = '/stories/getStories'
const GET_SINGLE_STORY = '/stories/getSingleStory'
const GET_USER_STORIES = '/stories/getUserStories'
const DELETE_USER_STORY = '/stories/deleteStory'
const UPDATE_USER_STORY = '/stories/updateStory'
const CREATE_NEW_STORY = '/stories/createNewStory'

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
        default:
            return state
    }
}

export default storyReducer
