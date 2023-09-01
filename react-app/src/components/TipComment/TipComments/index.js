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

  // 
  const sessionuser = useSelector(state => state.session.user)
  // console.log('sessionuser==========>', sessionuser)
  //

  useEffect(() => {
    dispatch(getComments(tipId));
  }, [dispatch, tipId]);

  const commentsList = Object.values(tipComments);
  console.log('tipComments',tipComments)
  console.log('COMMENTLSIT',commentsList)
  // rewrites the date to month, year
  let createdAtSplit;
  let createdAtSlice = 0;
  if(commentsList.length > 0 && commentsList[0].body){
    let createdAtDate = commentsList.map((comment) => (
      console.log('COMMENT',comment),

      createdAtSplit = comment.date_created.split(''),
      createdAtSlice = createdAtSplit.slice(8, 16).join('')
    ))
  }
  return (
    <div className="tip-comments-container">
      <div className="div-post-your-comment-button">
        {
          <OpenModal
            buttonText="Post A Comment"
            modalComponent={<PostCommentModal props={props} />}
          />
        }
      </div>
      <div className="comments-div-holder">
        {commentsList.length > 0 && commentsList.map(({ id, body, user_id, date_created }) => (
          <div key={id} className="spot-single-comment-div">
            <div className="comment-firstname">{sessionuser.first_name}</div>
            <div className="comment-created-date">{createdAtSlice}</div>
            <div className="comment-comment">{body}</div>
            <div className="tip-comment-modal-button-container">
            {user_id === currentUserId && (
              <>
                {" "}
                {<OpenModal
                  buttonText="Update"
                  modalComponent={
                    <EditCommentModal props={{ id, tipId }} />
                  }
                />}
                {<OpenModal
                  buttonText="Delete"
                  modalComponent={
                    <DeleteCommentModal props={{ id, tipId }} />
                  }
                />}
              </>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
