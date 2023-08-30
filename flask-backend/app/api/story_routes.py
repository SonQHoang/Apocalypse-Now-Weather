from flask import Blueprint, request
from app.models import Stories, User, StoryLikes
from ..models.db import db
from flask_login import current_user, login_required
from datetime import datetime
from ..forms.new_story_form import NewStoryForm
from ..forms.update_story_form import UpdateStoryForm
from ..forms.story_like_form import NewStoryLikeForm
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
            likes_result = {}
            likes_result['count'] = {}
            curr_story = story
            dict_curr_story = curr_story.to_dict()


            # getting the author info
            story_author_id = curr_story.user_id
            story_author = User.query.get(story_author_id)
            if story_author:
                story_author_dict = story_author.to_dict()

            dict_curr_story['likes'] = {}
            # dict_curr_story['likes']['count'] = len(curr_story.likes)
            if curr_story.likes:
                for like in curr_story.likes:
                    like_dict = like.to_dict()
                    dict_curr_story['likes'][like_dict['id']] = like_dict


            # getting the likes info
            # likes = StoryLikes.query.filter(StoryLikes.story_id == int(curr_story.id)).all()
            # likes_result['count'] = int(len(list(likes)))
            # likes_result['likes'] = {}

            # if likes:
            #     for like in likes:
            #         dict_like = like.to_dict()
            #         likes_result['likes'][dict_like['id']] = dict_like

            # putting it all together
            dict_curr_story['author'] = story_author_dict
            # dict_curr_story['likes'] = likes_result
            result[dict_curr_story['id']] = dict_curr_story

        return result

@story_routes.route('/<int:id>', methods=["GET"])
def single_story(id):
    story = Stories.query.get(id)
    result = story.to_dict()

    # grabbing author info
    author_id = story.user_id
    author = User.query.get(author_id)

    # grabbing likes info
    likes = StoryLikes.query.filter(StoryLikes.story_id == story.id).all()
    result['likes'] = {}
            # dict_curr_story['likes']['count'] = len(curr_story.likes)
    if story.likes:
        for like in story.likes:
            like_dict = like.to_dict()
            result['likes'][like_dict['id']] = like_dict

    # putting it all together
    result['author'] = author.to_dict()
    # result['likes'] = likes_result
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
@story_routes.route('/<int:id>/update', methods=["PUT"])
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

@story_routes.route('/user/<int:id>', methods=["GET"])
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

@login_required
@story_routes.route('/<int:id>/likes/new', methods=["POST"])
def add_story_like(id):
    form = NewStoryLikeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = request.json["user_id"]
        story_id = request.json["story_id"]

        new_like = StoryLikes(
            story_id=story_id,
            user_id=user_id
        )

        db.session.add(new_like)
        db.session.commit()
        return new_like.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@login_required
@story_routes.route('/likes/<int:likeId>/delete', methods=["DELETE"])
def delete_story_like(likeId):
    story_like = StoryLikes.query.filter(StoryLikes.id == likeId).first()
    if story_like:
        db.session.delete(story_like)
        db.session.commit()
        return story_like.to_dict()
    else:
        errors = {}
        errors['message'] = "No like found or you aren't authorized to delete this like."
        return errors

@story_routes.route('/<storyId>/likes/all')
def get_story_likes(storyId):
    # story_likes = StoryLikes.query.
    # num_likes = int(len(list(story_likes)))
    likes_result = {}
    likes_result['story']
    return likes_result

@story_routes.route('/likes/all')
def all_likes():
    likes = StoryLikes.query.all()
    result = {}
    for like in likes:
        dict_like = like.to_dict()
        result[dict_like['id']] = dict_like
    return result

@story_routes.route('/likes/<int:likeId>')
def single_like(likeId):
    like = StoryLikes.query.get(likeId)
    result = like.to_dict()
    return result
