const ADD_STORY_LIKE = '/storyLikes/addLike'
const DELETE_STORY_LIKE = '/storyLikes/deleteLike'
const GET_STORY_LIKES = '/storyLikes/getLikes'
const GET_ALL_LIKES = '/storyLikes/getAllLikes'
const GET_ONE_LIKE = '/storyLikes/getOneLike'

const getOneLike = (data) => {
    return {
        type: GET_ONE_LIKE,
        payload: data,
    }
}

const addLike = (data) => {
    return {
        type: ADD_STORY_LIKE,
        payload: data,
    }
}

const deleteLike = (data) => {
    return {
        type: DELETE_STORY_LIKE,
        payload: data,
    }
}

const getSingleStoryLikes = (data) => {
    return {
        type: GET_STORY_LIKES,
        payload: data,
    }
}

const getAllLikes = (data) => {
    return {
        type: GET_ALL_LIKES,
        payload: data,
    }
}

export const addStoryLike = (storyId, likeInfo) => async (dispatch) => {
    try {
        const request = await fetch(`/api/stories/${storyId}/likes/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })

        const data = await request.json()
        const createdLike = data
        dispatch(addLike(createdLike))
        return createdLike
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteStoryLike = (likeId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/likes/${likeId}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            const data = await response.json()
            dispatch(deleteLike(data))
            return data
        }

        return response
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getStoryLikes = (storyId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/${storyId}/likes/all`);
        if(response.ok) {
            const data = await response.json();
            const result = {}
            result[storyId] = {storyId: {data}}

            dispatch(getSingleStoryLikes(result));
            return result;
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() };
        return errors;
    }
}

export const getAllExistingLikes = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/likes/all`);
        if(response.ok) {
            const data = await response.json();

            dispatch(getAllLikes(data));
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

export const getSingleLike = (likeId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stories/likes/${likeId}`);
        if(response.ok) {
            const data = await response.json();
            dispatch(getOneLike(data));
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

const initialState = { allLikes: {}, singleLike: {}}
const storyLikesReducer = (state=initialState, action) => {
    let newState
    switch(action.type) {
        case GET_STORY_LIKES:
            newState = Object.assign({ ...state })
            newState.allLikes = action.payload
            return newState
        case ADD_STORY_LIKE:
            newState = Object.assign({ ...state })
            newState.allLikes = action.payload
            return newState
        case DELETE_STORY_LIKE:
            newState = Object.assign({ ...state })
            delete newState.allLikes[action.payload]
            return newState
        case GET_ALL_LIKES:
            newState = Object.assign({ ...state })
            newState.allLikes = action.payload
            return newState
        case GET_ONE_LIKE:
            newState = Object.assign({ ...state })
            newState.singleLike = action.payload
            return newState
        default:
            return state
    }
}

export default storyLikesReducer
