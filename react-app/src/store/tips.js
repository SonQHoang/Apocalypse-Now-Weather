// Action Creators

const CREATE_TIP = "tips/newTips"
const GET_ALL_TIPS = "tips/getTips"
const DELETE_TIP = "tips/deleteTips"
const GET_USER_TIPS = "tips/userTips"
const GET_TIP_BY_ID = "tips/tipById"
const UPDATE_TIP = "tips/updateTips"

const acCreateTip = (tips) => {
    return {
        type: CREATE_TIP,
        tips,
    }
}

const acGetAllTips = (tips) => {
    return {
        type: GET_ALL_TIPS,
        tips
    }
}

const acGetUserTips = (tips) => {
    return {
        type: GET_USER_TIPS,
        tips
    }
}
const acGetTipById = (tipId) => {
    return {
        type: GET_TIP_BY_ID,
        tipId
    }
}

const acUpdateTip = (tipId) => {
    return {
        type: UPDATE_TIP,
        tipId
    }
}

const acDeleteTip = (tipId) => {
    return {
        type: DELETE_TIP,
        tipId,
    };
};

// Thunk
export const createTip = (data, userId) => async (dispatch) => {
    try {
        const response = await fetch(`/${userId}/tips`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const tips = await response.json()
            dispatch(acCreateTip(tips))
            return tips
        } else {
            const errors = await response.text();
            throw new Error(`Failed to create tip: ${errors}`)
        }
    } catch (error) {
        console.error(error);
    }
}

export const getAllTips = () => async (dispatch) => {
    try {
        const response = await fetch(`/tips`)
        if (response.ok) {
            const tips = await response.json()
            dispatch(acGetAllTips(tips))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getUserTips = () => async (dispatch) => {
    try {
        const response = await fetch(`/user_tips`)
        if (response.ok) {
            const tips = await response.json()
            dispatch(acGetUserTips(tips))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getTipById = (tipId) => async (dispatch) => {
    try {
        const response = await fetch(`/tips/${tipId}`)
        if (response.ok) {
            const tip = await response.json() 

            dispatch(acGetTipById(tip))
        }
    } catch (error) {
        console.error(error)
    }
}

export const updateTips = (tipId, updatedTip) => async (dispatch) => {
    try {
        const response = await fetch(`/tips/${tipId}`, {
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(updatedTip)
        })
        if (response.ok) {
            dispatch(acUpdateTip(updatedTip))
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteTips = (tipId) => async (dispatch) => {
    try {
        const response = await fetch(`/tips/${tipId}`, {
            method: "DELETE",
            headers: {"Content-Type": 'application/json'}
        });
        if (response.ok) {
            dispatch(acDeleteTip(tipId))
        }
    } catch (error) {
        console.error(error)
    }
}

// Reducer

const initialState = {
    allTips: {},
    singleTip: {}
}

let newState
const tipReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TIP: {
            return { ...state, allTips: { ...state.allTips, [action.tips.id]: action.tips } };
        }
        case GET_ALL_TIPS: {
            return {
                ...state,
                allTips: action.tips
            }
        }

        case GET_USER_TIPS: {
            return {
                ...state,
                allTips: action.tips
            }
        }

        case GET_TIP_BY_ID: {
            return {
                ...state,
                singleTip: action.tipId
            };
        }

        case DELETE_TIP: {

            const newState = { ...state, allTips: { ...state.allTips } }
            delete newState.allTips[action.tipId]
            return newState

        }
        default:
            return state;
    }
}

export default tipReducer
