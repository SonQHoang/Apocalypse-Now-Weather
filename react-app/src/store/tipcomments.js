
import { getTipById } from "./tips";


const GET_TIPS_COMMENT = "tips/getComments";
const POST_TIPS_COMMENT = "tips/new";
const PUT_TIPS_COMMENT = "tips/update";

export const getTipComments = (data) => {
  return {
    type: GET_TIPS_COMMENT,
    comment: data
  };
};

export const addComment = (comment) => {
  return {
    type: POST_TIPS_COMMENT,
    comment,
  };
};

//get comments thunk creator
export const getComments = (tipId) => async (dispatch) => {

  const response = await fetch(`/api/tip-comments/${tipId}`, {
    method: "GET",
  });
  const data = await response.json();
  if(response.ok) {
    dispatch(getTipComments(data));

    return response;
  } else if(!response.ok && data.message) {
    dispatch(getTipComments(tipId.comments = {}))
  }
};

// create comment thunk action creator
export const postComment = (tipId, userId, commentBody) => async (dispatch) => {
  const responseBody = {
    body: commentBody,
    user_id: userId,
    tip_id: tipId,
  }


  const response = await fetch(`/api/tip-comments/comments/new`, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
    },
    body: JSON.stringify(responseBody),
  });
  if (response.ok) {
    const comment = await response.json();
    dispatch(getComments(tipId));
    dispatch(getTipById(tipId))
    return comment;
  }
};

//need an edit comment thunk action creator
export const editComment = (tipId, userId, body, commentId) => async (dispatch) => {

  const responseBody = {
    body,
    user_id: userId,
    tip_id: tipId
  }
  const response = await fetch(`/api/tip-comments/comments/${commentId}`, {
    method: "PUT",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
    },
    body: JSON.stringify(responseBody),
  });
  if (response.ok) {
    const comment = await response.json();
    dispatch(getComments(tipId));
    dispatch(getTipById(tipId))
    return comment;
  }
};

//delete comment thunk action creator
export const deleteComment = (id, tipId) => async (dispatch) => {
  const response = await fetch(`/api/tip-comments/comments/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    const comment = await response.json();
    const waiting = await dispatch(getComments(tipId))
    const stillWaiting = await dispatch(getTipById(tipId))
    return comment;
  }
}

const initalState = {
  comment: {}
};

const tipcommentsReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case GET_TIPS_COMMENT:

      newState = Object.assign({}, state);

      let newObject = {}
      action.comment.forEach(comment => {
        newObject[comment.id] = comment
      })
      newState = newObject;

      return newState;
    case POST_TIPS_COMMENT:
      newState = Object.assign({}, state);
      newState.tipcomments = action.comment;
      return newState;
    default:
      return state;
  }
};

export default tipcommentsReducer;
