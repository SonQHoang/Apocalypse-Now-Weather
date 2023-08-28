from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from .db import db, environment, SCHEMA



db = SQLAlchemy()

class StoryComment(db.Model):
    __tablename__='story_comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer(), primary_key=True)
    story_id = db.Column(db.Integer(), db.ForeignKey('story.id'), nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), nullable=False)
    date_created = db.Column(db.DateTime(255), default=datetime.now, nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    def to_dict(self):
        return {
            'id': self.id,
            'story_id': self.story_id,
            'user_id': self.user_id,
            'date_created': self.date_created,
            'comment': self.comment,
        }
