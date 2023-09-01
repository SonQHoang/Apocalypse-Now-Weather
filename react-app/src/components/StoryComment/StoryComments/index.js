import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/storycomments";
import "./StoryComments.css";
import OpenModal from "../../OpenModalButton";
import PostCommentModal from "../StoryPostCommentModal";
import DeleteCommentModal from "../StoryDeleteCommentModal";
import EditCommentModal from "../StoryUpdateCommentModal";



export default function StoryComments(prop) {
  const dispatch = useDispatch();
  const storyComments = useSelector((state) => state.comments);
  const currentUser = useSelector((state) => state.session.user);
  const storyId = prop.props



  let currentUserId;
  if (currentUser && currentUser.id) {
    currentUserId = currentUser.id;
  }
  const props = { storyId, currentUserId };


  useEffect(() => {
    dispatch(getComments(storyId));
  }, [dispatch, storyId]);

  const commentsList = Object.values(storyComments);

  // rewrites the date to month, year
  let createdAtSplit;
  let createdAtSlice;
  if(commentsList.length > 0 && commentsList[0].body){
    let createdAtDate = commentsList.map((comment) => (

      createdAtSplit = comment.date_created.split(''),
      createdAtSlice = createdAtSplit.slice(8, 16).join('')
    ))
  }

return (
    <div>
      {currentUserId &&  (
      <div className="div-post-your-comment-button">
        {
              <OpenModal
                buttonText="Post A Comment"
                modalComponent={<PostCommentModal props={props} />}
              />
         }
      </div>
      )}
      <div className="comments-div-holder">
        {commentsList.length > 0 && commentsList.map(({ id, body, user_id, date_created }) => (
          <div key={id} className="spot-single-comment-div">
            <div className="comment-firstname">User.firstName</div>
            <div className="comment-created-date">{createdAtSlice}</div>
            <div className="comment-comment">{body}</div>
            {user_id === currentUserId &&  (
              <>
                {" "}
                  { <OpenModal
                    buttonText="Update"
                    modalComponent={
                      <EditCommentModal props={{ id, storyId }} />
                    }
                  /> }
                  { <OpenModal
                    buttonText="Delete"
                    modalComponent={
                      <DeleteCommentModal props={{ id, storyId }} />
                    }
                  /> }
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
