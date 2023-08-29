from flask import Blueprint, request, jsonify, request
from app.models.db import db
from app.models.story_comments import StoryComments
from app.forms.comments import PostComment
from app.models.user import User
from datetime import date




story_comments = Blueprint("story_comments", __name__)


@story_comments.route("/<int:id>", methods=['GET'])
def get_story_comments(id):

    comments = StoryComments.query.filter(StoryComments.story_id == id).all()
    users = User.query.all()
    result = [comment.to_dict() for comment in comments]
    return jsonify(result)

@story_comments.route("/<int:storyId>/comments/<int:userId>", methods=['POST'])
def post_comment(storyId, userId):
    print('this is working')
    form = PostComment()
    print('this is not')
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_comment = StoryComments(
            story_id = storyId,
            user_id = userId,
            body = form.data['body'],
            date_created = date.today()
        )

        new_comment = StoryComments(jsonify(new_comment))
        db.session.add(new_comment)
        db.session.commit()
        return jsonify(new_comment.to_dict()), 201
    if form.errors:
        print(form.errors)


# @story_comments.route("stories/comments/<int:commentId>", methods=['PUT'])
# def put_comment():
#     form = PostComment()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data = form.data
#         edited_comment = StoryComment(**data)
#         comment = StoryComment.query.get(id)
#         db.session.add(edited_comment)
#         db.session.commit()
#         return jsonify(edited_comment.to_dict()), 201
    # ask how we should probably incorporate this


@story_comments.route('stories/comments/<int:commentId>', methods=['DELETE'])
def delete_comment(id):
    comment = StoryComments.query.get(id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({"message": "Comment deleted successfully"})
    else:
        return jsonify({"error": "Failed to delete comment"}), 400
