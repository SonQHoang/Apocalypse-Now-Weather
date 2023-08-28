from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# db = SQLAlchemy()

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    location = db.Column(db.String, nullable=False)
    # location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    email = db.Column(db.String(255), nullable=False, unique=True)
    prepper_type = db.Column(db.String)
    prepper_description = db.Column(db.String)
    bio = db.Column(db.String)
    hashed_password = db.Column(db.String(255), nullable=False)

    # Users has one => many relationships with Stories, Tips, StoryComments, StoryLikes
    stories = db.relationship('Stories', back_populates='author')
    tips = db.relationship('Tips', back_populates='author')
    tip_comments = db.relationship('TipComments', back_populates='commenter')
    story_comments = db.relationship('StoryComments', back_populates='commenter')
    story_likes = db.relationship('StoryLikes', back_populates='liker')
    tip_likes = db.relationship('TipLikes', back_populates='liker')
    location2 = db.relationship("Location", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "location": self.location,
            "email": self.email,
            "prepper_type": self.prepper_type,
            "prepper_description": self.prepper_description,
            "bio": self.bio,
            "password": self.password
        }

