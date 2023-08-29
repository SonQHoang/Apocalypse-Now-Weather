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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const tips = await response.json()
            console.log('What does this tip data look like=========>', tips)
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

// export const getTipById = (tipId) => async (dispatch) => {
//     console.log('this is my tipId====>', tipId)
//     try {
//         const response = await fetch(`/spots/${tipId}`);
//         if (response.ok) {
//             const tip = await response.json();

//             dispatch(acGetTipById(tip))
//         } else {
//             throw new Error('Failed to fetch spot by ID')
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

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

export const deleteTips = (data) => async (dispatch) => {
    try {
        const response = await fetch (`/tips/${data}`, {
            method: "DELETE"
        });
        console.log('Am I getting any response back====>', response)
        if (response.ok) {
            const tips = await response.json()
            dispatch(acDeleteTip(tips))
            return tips
        }
    }catch (error) {
        console.error(error)
    }
}

// Reducer

const initialState = {
    allTips: {},
    singleTip: {}
}

const tipReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TIP: {
            const newState = { ...state };
            newState.allTips[action.tips.id] = action.tips;
            return newState
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
            const updatedTips = { ...state.allTips };
            delete updatedTips[action.tipId];
            return {
                ...state,
                allTips: updatedTips
            }
        }

        default:
            return state;
    }
}

export default tipReducer