// Action Creators

const CREATE_TIP = "tips/newTips"
const GET_ALL_TIPS = "tips/getTips"
const DELETE_TIP = "tips/deleteTips"
const GET_USER_TIPS = "tips/userTips"
const GET_TIP_BY_ID = "tips/tipById"

const acCreateTip = (tips) => {
    console.log('Am I getting a new tip?======> Yes', tips)
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

const acGetUserTips = (tips) => {
    console.log('What is the data in acGetUserTips=====>', tips)
    return {
        type: GET_USER_TIPS,
        tips
    }
}
const acGetTipById = (tipId) => {
    // console.log('Does tipId contain the expected payload====> Yes', tipId)
    return {
        type: GET_TIP_BY_ID,
        tipId
    }
}

const acDeleteTip = (tipId) => {
    console.log('Is tipId giving me a number=====>', tipId)
    return {
        type: DELETE_TIP,
        tipId,
    };
};

// Thunk
export const createTip = (data, userId) => async (dispatch) => {
    // console.log('Stop two. Do I have data and a tipId?====>', data)
    try {
        const response = await fetch(`/${userId}/tips`, {
            method: "POST",
            headers: { "Content`-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            // console.log('What does my response look like====>', response)
            const tips = await response.json()
            // console.log('What does this tip data look like=========>', tips)
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
    try {
        const response = await fetch(`/user_tips`)
        // console.log('what does my response look like?====>', response)
        if (response.ok) {
            const tips = await response.json()
            console.log('This is my data======>', tips)
            dispatch(acGetUserTips(tips))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getTipById = (tipId) => async (dispatch) => {
    try {
        const response = await fetch(`/tips/${tipId}`)
        // console.log('Am I getting a 200 response?====> Yes', response)
        if (response.ok) {
            const tip = await response.json()
            // console.log('Does the tip have all the data I need?====> Yes', tip)

            dispatch(acGetTipById(tip))
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteTips = (spotId) => async (dispatch) => {
    try {
        const response = await fetch(`/tips/${spotId}`, {
            method: "DELETE",
            headers: {"Content-Type": 'application/json'}
        });
        console.log('Am I getting any response back====> Yes, 200', response)
        if (response.ok) {
            // const tips = await response.json()
            dispatch(acDeleteTip(spotId))
            // return tips
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
            // console.log('Before creation:', state);
            return { ...state, allTips: { ...state.allTips, [action.tips.id]: action.tips } };
            // return newState
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
            // console.log('Deleting tip with ID:', action.tipId);
            // console.log('Before deletion:', state); 

            const newState = { ...state, allTips: { ...state.allTips } }
            delete newState.allTips[action.tipId]
            // console.log('After deletion:', newState);
            return newState
            
        }
// Something may be causing state to not re-render
// Need to cause a new ref in memory

// Check for a useSelector for resource changes
// slice of state boolean, change that to force the change
        default:
            return state;
    }
}

export default tipReducer