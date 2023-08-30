import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/tipcomments";
import OpenModal from "../../OpenModalButton";
import PostCommentModal from "../TipPostCommentModal";
import DeleteCommentModal from "../TipDeleteCommentModal";
import EditCommentModal from "../TipUpdateCommentModal";
import "./TipComments.css";



export default function TipComments(prop) {
  const dispatch = useDispatch();
  const tipComments = useSelector((state) => state.tipcomments);
  const currentUser = useSelector((state) => state.session.user);
  const tipId = prop.props

  let currentUserId;
  if (currentUser && currentUser.id) {
    currentUserId = currentUser.id;
  }
  const props = { tipId, currentUserId };


  useEffect(() => {
    dispatch(getComments(tipId));
  }, [dispatch, tipId]);

  const commentsList = Object.values(tipComments);



//   let createdAtSplit;
//   let year;
//   let month;
//   if(Object.keys(commentsList)){
//   let createdAtDate = commentsList.map((comment) => (
//     createdAtSplit = comment.createdAt.split('-'),
//     year = createdAtSplit[0],
//     month = createdAtSplit[1],
//     comment.createdAt = `${month} ${year}`
//     ))
// }

return (
    <div>
      <div className="div-post-your-comment-button">
        {
              <OpenModal
                buttonText="Post A Comment"
                modalComponent={<PostCommentModal props={props} />}
              />
         }
      </div>
      <div className="comments-div-holder">
        {commentsList.map(({ id, body, user_id, date_created }) => (
          <div key={id} className="spot-single-comment-div">
            <div className="comment-firstname">User.firstName</div>
            <div className="comment-created-date">{date_created}</div>
            <div className="comment-comment">{body}</div>
            {user_id === currentUserId &&  (
              <>
                {" "}
                  { <OpenModal
                    buttonText="Update"
                    modalComponent={
                      <EditCommentModal props={{ id, tipId }} />
                    }
                  /> }
                  { <OpenModal
                    buttonText="Delete"
                    modalComponent={
                      <DeleteCommentModal props={{ id, tipId }} />
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
