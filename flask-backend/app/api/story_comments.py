from flask import Blueprint, request, jsonify
from app.models import db
from app.models.comment import StoryComment
# from app.forms import PostComment



bp = Blueprint("story_comments", __name__)


@bp.route("/api/stories/<storyId>/comments", methods=['GET'])
def story_comments():
    comments = StoryComment.query.all()
    return jsonify([comments.to_dict() for comment in comments])

@bp.route("/api/stories/<storyId>/comments", methods=['POST'])
def post_comment():
    form = PostComment()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_comment = StoryComment(**data)
        db.session.add(new_comment)
        db.session.commit()
        return jsonify(new_comment.to_dict()), 201

@bp.route("/api/stories/<storyId>/comments/<commentId>", methods=['PUT'])
def post_comment():
    form = PostComment()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        edited_comment = StoryComment(**data)
        comment = StoryComment.query.get(id)
        db.session.add(new_comment)
        db.session.commit()
        return jsonify(new_comment.to_dict()), 201
    # ask how we should probably incorporate this


@bp.route('/api/stories/<storyId>/comments/<commentId>', methods=['DELETE'])
def delete_comment(id):
    comment = StoryComment.query.get(id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({"message": "Comment deleted successfully"})
    else:
        return jsonify({"error": "Failed to delete comment"}), 400
