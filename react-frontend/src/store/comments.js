import { csrfFetch } from "./csrf";
import { getStory } from "./stories";

const GET_COMMENTS = "comments/getComments";
const POST_COMMENTS = "comments/new";

export const getStoryComments = (storyId) => {
  return {
    type: GET_COMMENTS,
    comments: storyId.comments,
  };
};

export const addComment = (comment) => {
  return {
    type: POST_COMMENTS,
    comment,
  };
};

export const getComments = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}/comments`, {
    method: "GET",
  });
  const data = await response.json();
  if(response.ok) {
    dispatch(getStoryComments(data));
    return response;
  } else if(!response.ok && data.message) {
    dispatch(getStoryComments({Reviews: []}))
  }
};

export const postComment = (spotId, payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const comment = await response.json();
    dispatch(getComments(storyId));
    dispatch(getStories(storyId))
    return comment;
  }
};

//delete Review thunk action creator
export const deleteComment = (id, storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comment/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    const comment = await response.json();
    const waiting = await dispatch(getComments(storyId))
    const stillWaiting = await dispatch(getStory(storyId))
    return comment;
  }
}

const initalState = {
  story: {},
  user: {},
};

const commentsReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      let newObject = {}
      action.comments.forEach(comment => {
        newObject[comment.id] = comment
      })
      newState.spot = newObject;
      return newState;
    case POST_COMMENTS:
      newState = Object.assign({}, state);
      newState.story = action.comment;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
