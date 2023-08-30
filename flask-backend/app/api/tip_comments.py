from flask import Blueprint, request, jsonify, request
from app.models.db import db
from app.models.tip_comments import TipComments
from app.forms.comments import CommentForm
from app.models.user import User
from datetime import date





tip_comments = Blueprint("tip_comments", __name__)


@tip_comments.route("/<int:id>", methods=['GET'])
def get_tip_comments(id):

    comments = TipComments.query.filter(TipComments.story_id == id).all()
    users = User.query.all()
    result = [comment.to_dict() for comment in comments]
    return jsonify(result)

@tip_comments.route("/comments/new", methods=['POST'])
def post_tip_comment():
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_comment = TipComments(
            tip_id = form.data['storyId'],
            user_id = form.data['userId'],
            body=form.data['commentBody'],
            date_created = date.today(),
        )
        print(new_comment)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()

    if form.errors:
        print(form.errors)
        return {"errors": "we got some errors"}


@tip_comments.route("/comments/<int:commentId>", methods=['PUT'])
def put_tip_comment(commentId):
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        comment_to_update = TipComments.query.get(commentId)
        comment_to_update.body = form.data['commentBody']
        db.session.commit()
        return comment_to_update.to_dict()

    if form.errors:
        print(form.errors)
        return {"errors": "we got some errors"}



@tip_comments.route('/comments/<int:commentId>', methods=['DELETE'])
def delete_comment(commentId):
    comment = TipComments.query.get(commentId)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({"message": "Comment deleted successfully"})
    else:
        return jsonify({"error": "Failed to delete comment"}), 400
