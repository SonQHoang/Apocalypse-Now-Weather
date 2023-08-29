from flask import Blueprint, request
from app.models import Stories, User
from ..models.db import db
from flask_login import current_user, login_required
from datetime import datetime
from ..forms.new_story_form import NewStoryForm
from ..forms.update_story_form import UpdateStoryForm
from .auth_routes import validation_errors_to_error_messages

story_routes = Blueprint('stories', __name__)

@story_routes.route('/all', methods=["GET"])
def story_index():
    all_stories = Stories.query.all()
    if not all_stories:
        error = {}
        error.message = "No stories found!"
        return error.message
    else:
        result = {}
        for story in all_stories:
            curr_story = story
            story_author_id = curr_story.user_id
            story_author = User.query.get(story_author_id)
            if story_author:
                story_author_dict = story_author.to_dict()
            dict_curr_story = curr_story.to_dict()
            dict_curr_story['author'] = story_author_dict
            result[dict_curr_story['id']] = dict_curr_story

        return result

@story_routes.route('/<int:id>', methods=["GET"])
def single_story(id):
    story = Stories.query.get(id)
    author_id = story.user_id
    author = User.query.get(author_id)
    result = story.to_dict()
    result['author'] = author.to_dict()
    return result

@login_required
@story_routes.route('/new', methods=["POST"])
def post_story():
    form = NewStoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = request.json["user_id"]
        title = request.json["title"]
        body = request.json["body"]
        story = Stories(
            user_id=user_id,
            title=title,
            body=body,
            date_created=datetime.now()
        )
        db.session.add(story)
        db.session.commit()
        return story.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@login_required
@story_routes.route('/<id>/update', methods=["PUT"])
def update_story(id):
    curr_story = Stories.query.get(id)
    form = UpdateStoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if curr_story.user_id != current_user.id:
            error = {}
            error.message = "You can't change someone else's story!"
            return error
        title = request.json["title"]
        body = request.json["body"]
        curr_story.title = title
        curr_story.body = body
        updated_story = curr_story
        updated_story_dict = updated_story.to_dict()
        db.session.commit()
        return updated_story_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@story_routes.route('/user/<id>', methods=["GET"])
def get_user_stories(id):
    user_stories = Stories.query.filter(Stories.user_id == current_user.id).all()
    result = {}
    for story in user_stories:
        curr_story = story
        dict_curr_story = curr_story.to_dict()
        result[dict_curr_story['id']] = dict_curr_story
    return result

@login_required
@story_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_story(id):
    story = Stories.query.get(id)
    if story.user_id != current_user.id:
        error = {}
        error.message = "You can't delete someone else's story!"
        return error
    db.session.delete(story)
    db.session.commit()
    return story.to_dict()
