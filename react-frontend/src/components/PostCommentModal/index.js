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

  let isDisabled = false;
  if (comment.length < 5) {
    isDisabled = true;
  }

  const submitComment = async (e) => {
    e.preventDefault();

    const newComment = {
      userId,
      storyId,
      comment,
    };

    await dispatch(postComment(storyId, newComment)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
    reset();
    closeModal();
  };

  const reset = () => {
    setComment("");
  };


  return (
    <div className="comment-form-modal">
      <h1>Leave a Comment</h1>
      <>{errors.message}</>
      <textarea
        className="post-comment-form-modal"
        placeholder="Leave your comment here.."
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className='submit-comment-buttom' onClick={submitComment} disabled={isDisabled}>
        Submit Your Comment
      </button>
    </div>
  );
}

export default PostCommentModal;
