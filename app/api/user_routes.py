from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User
from ..forms.prepper_type import PrepperTypeForm
from .auth_routes import validation_errors_to_error_messages
from ..models.db import db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@login_required
@user_routes.route('/<int:id>/update-prepper-type', methods=["PUT"])
def update_prepper_type(id):
    user = User.query.get(id)
    form = PrepperTypeForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        first_name = request.json.get("first_name")
        last_name = request.json.get("last_name")
        username = request.json.get("username")
        location = request.json.get("location")
        latitude = request.json.get("latitude")
        longitude = request.json.get("longitude")
        email = request.json.get("email")
        prepper_type = request.json.get("prepper_type")
        prepper_description = request.json.get("prepper_description")
        bio = request.json.get("bio")

        user.id = current_user.id

        if first_name is not None:
            current_user.first_name = first_name
        if last_name is not None:
            current_user.last_name = last_name
        if username is not None:
            current_user.username = username
        if location is not None:
            current_user.location = location
        if latitude is not None:
            current_user.latitude = latitude
        if longitude is not None:
            current_user.longitude = longitude
        if email is not None:
            current_user.email = email
        if prepper_type is not None:
            current_user.prepper_type = prepper_type
        if prepper_description is not None:
            current_user.prepper_description = prepper_description
        if bio is not None:
            current_user.bio = bio

        # if form.errors:
        #     return validation_errors_to_error_messages(form.errors)
        # else:
        #     user.id = current_user.id
        #     user.first_name = current_user.first_name
        #     user.last_name = current_user.last_name
        #     user.username = current_user.username
        #     user.location = current_user.location
        #     user.latitude = current_user.latitude
        #     user.longitude = current_user.longitude
        #     user.email = current_user.email
        #     user.prepper_type = prepper_type
        #     user.prepper_description = prepper_description
        #     user.bio = current_user.bio

        updated_user = user
        updated_user_dict = updated_user.to_dict()

        if form.errors:
            return validation_errors_to_error_messages(form.errors)

        db.session.commit()
        
        return updated_user_dict

@user_routes.route('/survivor/<int:id>')
def get_single_survivor(id):
    user = User.query.get(id)
    return user.to_dict()
