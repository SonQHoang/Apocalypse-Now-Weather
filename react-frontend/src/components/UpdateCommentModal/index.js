import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../store/comments";
import React, { useState } from "react";
import "./UpdateCommentModal.css";



function EditCommentModal(props) {
  const storyComments = useSelector((state) => state.comments);
  const currentUser = useSelector((state) => state.session.user);
  const storyId  = props.props.storyId;
  const userId  = currentUser.id
  const commentId = props.props.id
  const { closeModal } = useModal();
  const commentToEdit = (storyComments[commentId])
  const dispatch = useDispatch();


  const [commentBody, setComment] = useState('');
  const [errors, setErrors] = useState({});

  let isDisabled = true;
  if (commentBody.length > 0) {
    isDisabled = false;
  }

  const submitComment = async (e) => {
    e.preventDefault();
    const data = await dispatch(editComment(storyId, userId, commentBody, commentId));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      closeModal();
    }
  };


  return (
    <div className="comment-form-modal">
      <h1>Edit your Comment</h1>
      <>{errors.message}</>
      <textarea
        className="post-comment-form-modal"
        onChange={(e) => setComment(e.target.value)}
      >{commentToEdit.body}</textarea>
      <button className='submit-comment-buttom' onClick={submitComment} disabled={isDisabled}>
        Submit Your Comment
      </button>
    </div>
  );
}

export default EditCommentModal;
