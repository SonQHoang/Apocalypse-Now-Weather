// Action Creators

const CREATE_TIP = "tips/newTips"
const GET_ALL_TIPS = "tips/getTips"
const DELETE_TIP = "tips/deleteTips"
const GET_USER_TIPS = "tips/userTips"
const GET_TIP_BY_ID = "tips/tipById"

const acCreateTip = (tips) => {
    return {
        type: CREATE_TIP,
        tips
    }
}

const acGetAllTips = (tips) => {
    return {
        type: GET_ALL_TIPS,
        tips
    }
}

const acDeleteTips = (tips) => {
    return {
        type: DELETE_TIP,
        tips
    }
}
const acGetUserTips = (tips) => {
    return {
        type: GET_USER_TIPS,
        tips
    }
}
const acGetTipById = (tips) => {
    return {
        type: GET_TIP_BY_ID,
        tips
    }
}

// Thunk
export const createTip = () => async (dispatch) => {
    try {
        const response = await fetch('/api/tips')
    } catch (error) {

    }
}

export const getAllTips = () => async (dispatch) => {

}

export const getUserTips = () => async (dispatch) => {

}
export const getTipById = (tipId) => async (dispatch) => {

}

export const deleteTips = (tipId) => async (dispatch) => {

}

// Reducer

// Store