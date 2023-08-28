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
            print(dict_curr_story)
        return result

@story_routes.route('/<int:id>', methods=["GET"])
def single_story(id):
    story = Stories.query.get(id)
    result = story.to_dict()
    return result

@login_required
@story_routes.route('/new', methods=["GET"])
def story_form():
    form = NewStoryForm()
    # if form.validate_on_submit():
    #     print('validating')
    #     story_title = form.title.data
    #     story_body = form.body.data
    #     if current_user:
    #         user_id = current_user.id
    #     else:
    #         user_id = 100
    #     new_story = Stories(user_id=user_id, title=story_title, body=story_body, date_created=datetime.now())
    #     # print(new_story.)
    #     db.session.add(new_story)
    #     db.session.commit()
    #     return redirect(url_for('.story_index'))
    # print(form.errors)
    return form

@login_required
@story_routes.route('/new', methods=["POST"])
def post_story():
    title = request.json['title']
    body = request.json['body']

    story = Stories(
        user_id=current_user.id,
        title=title,
        body=body,
        date_created=datetime.now()
    )

    db.session.add(story)
    db.session.commit()
    return story.to_dict()

# @story_routes.route('/new', methods=["POST"])
# def create_story():
#     form = NewStoryForm()
#     if form.validate_on_submit():
#         story_title = form.title.data
#         story_body = form.body.data
#         new_story = Stories(user_id=current_user.id, title=story_title, body=story_body, date_created=datetime.now())
#         db.session.add(new_story)
#         db.session.commit()
#         return redirect(url_for())
#     return render_template("new_story_form.html", form=form)

@story_routes.route('/<id>/update', methods=["GET"])
def story_update_form(id):
    curr_story = Stories.query.get(id)
    result = curr_story.to_dict()
    return result

@story_routes.route('/<id>/update', methods=["PUT"])
def update_story(id):
    curr_story = Stories.query.get(id)
    story_dict = curr_story.to_dict()
    return story_dict

@story_routes.route('/stories/current-user', methods=["GET"])
def get_user_stories():
    return
