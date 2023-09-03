from flask import Blueprint, request, jsonify, request
from app.models.db import db
from app.models.story_comments import StoryComments
from app.forms.comments import CommentForm
from app.models.user import User
from datetime import date





story_comments = Blueprint("story_comments", __name__)


@story_comments.route("/<int:id>", methods=['GET'])
def get_story_comments(id):

    comments = StoryComments.query.filter(StoryComments.story_id == id).all()
    users = User.query.all()
    result = [comment.to_dict() for comment in comments]
    results = []
    for comment in comments:
        comment_dict = comment.to_dict()
        commenter = comment.commenter
        comment_dict['commenter'] = commenter.to_dict()
        results.append(comment_dict)
    print("""
          THEIR RESULT:
          """, result)
    print("""
          MY RESULT:
          """, results)
    return jsonify(results)

@story_comments.route("/comments/new", methods=['POST'])
def post_comment():
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_comment = StoryComments(
            story_id = form.data['storyId'],
            user_id = form.data['userId'],
            body=form.data['commentBody'],
            date_created = date.today(),
        )
        # print(new_comment)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()

    if form.errors:
        # print(form.errors)
        return {"errors": "we got some errors"}


@story_comments.route("/comments/<int:commentId>", methods=['PUT'])
def put_comment(commentId):
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        comment_to_update = StoryComments.query.get(commentId)
        comment_to_update.body = form.data['commentBody']
        db.session.commit()
        return comment_to_update.to_dict()

    if form.errors:
        # print(form.errors)
        return {"errors": "we got some errors"}



@story_comments.route('/comments/<int:commentId>', methods=['DELETE'])
def delete_comment(commentId):
    comment = StoryComments.query.get(commentId)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return jsonify({"message": "Comment deleted successfully"})
    else:
        return jsonify({"error": "Failed to delete comment"}), 400
