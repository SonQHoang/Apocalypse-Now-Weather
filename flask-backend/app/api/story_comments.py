from flask import Blueprint, request, jsonify
from app.models.db import db
from app.models.comment import StoryComment
# from app.forms import PostComment

bp = Blueprint("story_comments", __name__)


@bp.route("stories/<int:id>/comments", methods=['GET'])
def story_comments(id):
    print('we hitting this')
    comments = StoryComment.query.filter(StoryComment.story_id == id).all()
    print(comments)
    result = [comment.to_dict() for comment in comments]
    print(result)
    return jsonify(result)

@bp.route("stories/comments", methods=['POST'])
def post_comment():
    form = PostComment()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_comment = StoryComment(**data)
        db.session.add(new_comment)
        db.session.commit()
        return jsonify(new_comment.to_dict()), 201

# @bp.route("stories/comments/<int:commentId>", methods=['PUT'])
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


@bp.route('stories/comments/<int:commentId>', methods=['DELETE'])
def delete_comment(id):
    comment = StoryComment.query.get(id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({"message": "Comment deleted successfully"})
    else:
        return jsonify({"error": "Failed to delete comment"}), 400
