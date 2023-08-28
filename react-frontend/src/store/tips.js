// Action Creators

const CREATE_TIP = "tips/newTips"
const GET_ALL_TIPS = "tips/getTips"
const DELETE_TIP = "tips/deleteTips"
const GET_USER_TIPS = "tips/userTips"
const GET_TIP_BY_ID = "tips/tipById"

const acCreateTip = (tips) => {
    console.log('Is my tip data coming here yet?======>', tips)
    return {
        type: CREATE_TIP,
        tips,
    }
}

const acGetAllTips = (tips) => {
    // console.log('Tips in my AC====>', tips)
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
const acGetTipById = (tipId) => {
    return {
        type: GET_TIP_BY_ID,
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
export const createTip = (data) => async (dispatch) => {
    // console.log('Seeing if data is coming through====>', data)
    try {
        const response = await fetch('/tips', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        // console.log('what does my response look like====>', response)
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
        // console.log('what does my response look like?====>', response)
        if (response.ok) {
            const tips = await response.json()
            // console.log('This is my data======>', data)
            dispatch(acGetAllTips(tips))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getUserTips = () => async (dispatch) => {
}

export const getTipById = (tipId) => async (dispatch) => {
}

export const deleteTips = (tipId) => async (dispatch) => {
}

// Reducer

const initialState = {
    allTips: {},
    singleTip: {}
}

const tipReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TIP: {
            return {
                ...state,
                allTips: {
                    ...state.allTips,
                    [action.tips.id]: action.tips
                }
            }
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
            const stateObject = {}
            state.allTips.forEach((tip) => {
                stateObject[tip.id] = tip
            })
            delete stateObject[action.tipId]
            const stateArray = Object.values(stateObject)
            return {
                ...state,
                allTips: stateArray
            }
        }

        default:
            return state;
    }
}

export default tipReducer