import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteComment } from "../../../store/tipcomments";
import "./TipDeleteCommentModal.css";

function DeleteCommentModal(props) {
  const { id, tipId } = props.props;
  console.log("props", props.props, "id", id, "tip", tipId);
  const { closeModal } = useModal();
  const dispatch = useDispatch();



  const handleDelete = async (e) => {
    const data = await dispatch(deleteComment(id, tipId));

    closeModal();
  };

  return (
    <div className="delete-tip-confirm-delete-modal">
      <h1 className="confirm-delete-modal-heading">Confirm Delete</h1>
      <h2 className="confirm-delete-modal-text">
        Are you sure you want to delete this Comment?
      </h2>
      <button className="delete-modal-delete-Comment" onClick={handleDelete}>
        Yes (Delete Comment)
      </button>
      <button className="delete-modal-keep-Comment" onClick={closeModal}>
        No (Keep Comment)
      </button>
    </div>
  );
}

export default DeleteCommentModal;
