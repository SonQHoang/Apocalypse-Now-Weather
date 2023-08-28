from flask import Blueprint, jsonify, render_template, redirect, url_for, request
from app.models import Stories
from ..forms.new_story_form import NewStoryForm
from ..models.db import db
from flask_login import current_user, login_required
from datetime import datetime

story_routes = Blueprint('stories', __name__)

@story_routes.route('/all', methods=["GET"])
def story_index():
    all_stories = Stories.query.all()
    if not all_stories:
        error = {}
        error.message = "No stories found!"
        print(error)
        return error.message
    else:
        result = {}
        for story in all_stories:
            curr_story = story
            dict_curr_story = curr_story.to_dict()
            result[dict_curr_story['id']] = dict_curr_story
        return result

@story_routes.route('/<int:id>', methods=["GET"])
def single_story(id):
    story = Stories.query.get(id)
    result = story.to_dict()
    return result

@login_required
@story_routes.route('/new', methods=["POST"])
def post_story():
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


@story_routes.route('/<id>/update', methods=["PUT"])
def update_story(id):
    curr_story = Stories.query.get(id)
    title = request.json["title"]
    body = request.json["body"]
    # print("CURRENT STORY TITLE: ", curr_story.title)
    # print("CURRENT STORY BODY: ", curr_story.body)
    # print("UPDATED STORY TITLE: ", title)
    # print("UPDATED STORY BODY: ", body)
    curr_story.title = title
    curr_story.body = body
    updated_story = curr_story
    updated_story_dict = updated_story.to_dict()
    db.session.commit()
    return updated_story_dict

@story_routes.route('/user/<id>', methods=["GET"])
def get_user_stories(id):
    curr_user_id = current_user.id
    user_stories = Stories.query.filter(Stories.user_id == current_user.id).all()
    result = {}
    for story in user_stories:
        curr_story = story
        dict_curr_story = curr_story.to_dict()
        result[dict_curr_story['id']] = dict_curr_story
    return result

@story_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_story(id):
    story = Stories.query.get(id)
    db.session.delete(story)
    db.session.commit()
    return story.to_dict()
