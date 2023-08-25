import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStoryComments } from "../../store/comments";
import "./StoryComments.css";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import PostCommentModal from "../PostCommentModal";
// import DeleteCommentModal from "../DeleteReviewModal";

review
export default function StoryComments() {
  const storyId = useParams().storyId;
  const dispatch = useDispatch();
  const storyComments = useSelector((state) => state.stories.comments);
  const ownerId = useSelector((state) => state.spots.story.ownerId);
  const currentUser = useSelector((state) => state.session.user);



  let currentUserId;
  if (currentUser && currentUser.id) {
    currentUserId = currentUser.id;
  }
  const props = { storyId, currentUserId };

  useEffect(() => {
    dispatch(getComments(storyId));
  }, [dispatch, storyId]);

  const commentsList = Object.values(storyComments);


  let createdAtSplit;
  let year;
  let month;
  if(Object.keys(commentsList)){
  let createdAtDate = commentsList.map((comment) => (
    createdAtSplit = comment.createdAt.split('-'),
    year = createdAtSplit[0],
    month = createdAtSplit[1],
    comment.createdAt = `${month} ${year}`
    ))
}

  return (
    <div>
      <div className="div-post-your-comment-button">
        {/* <button className="post-your-comment-button">
              <OpenModalMenuItem
                itemText="Post A Comment"
                modalComponent={<PostCommentModal props={props} />}
              />
        </button> */}
      </div>
      <div className="comments-div-holder">
        {commentsList.map(({ id, comment, User, createdAt, storyId }) => (
          <div key={id} className="spot-single-comment-div">
            <div className="comment-firstname">{User.firstName}</div>
            <div className="comment-created-date">{createdAt}</div>
            <div className="comment-comment">{comment}</div>
            {User.id === currentUserId && (
              <>
                {/* <button className="comment-update-button">
                {" "}
                  <OpenModalMenuItem
                    itemText="Update"
                    modalComponent={
                      <UpdateCommentModal props={{ id, storyId }} />
                    }
                  />
                </button>
                <button className="comment-delete-button">
                  {" "}
                  <OpenModalMenuItem
                    itemText="Delete"
                    modalComponent={
                      <DeleteCommentModal props={{ id, storyId }} />
                    }
                  />
                </button> */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
