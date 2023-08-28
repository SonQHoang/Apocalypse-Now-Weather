from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Stories(db.Model):
    __tablename__ = "stories"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)

    # Stories has one => many relationships with Users, StoryComments, StoryLikes
    author = db.relationship('User', back_populates='stories')
    comments = db.relationship('StoryComments', back_populates='story')
    likes = db.relationship('StoryLikes', back_populates='story')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "body": self.body,
            "date_created": self.date_created,
            # "author": self.author.to_dict()
        }
