import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { postComment } from "../../store/comments";
import React, { useState } from "react";
import "./PostCommentModal.css";


function PostCommentModal(props) {

  const storyId  = props.props.storyId;
  const userId  = props.props.currentUserId
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  let isDisabled = true;
  if (comment.length > 0) {
    isDisabled = false;
  }

  const submitComment = async (e) => {
    e.preventDefault();
    const data = await dispatch(postComment(storyId, userId, comment));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      closeModal();
    }
  };

  return (
    <div className="comment-form-modal">
      <h1>Leave a Comment</h1>
      {/* <>{errors.message}</> */}
      <textarea
        className="post-comment-form-modal"
        placeholder="Leave your comment here.."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className='submit-comment-buttom' onClick={submitComment} disabled={isDisabled}>
        Submit Your Comment
      </button>
    </div>
  );
}

export default PostCommentModal;
