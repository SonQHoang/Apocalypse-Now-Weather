from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class StoryLikes(db.Model):
    __tablename__ = "story_likes"
    id = db.Column(db.Integer, primary_key=True)
    story_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('stories.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    #StoryLikes has a many to one relationship with Stories and Users
    story = db.relationship('Stories', back_populates='likes')
    liker = db.relationship('User', back_populates='story_likes')

    def to_dict(self):
        return {
            "id": self.id,
            "story_id": self.story_id,
            "user_id": self.user_id,
            "story": self.story.to_dict(),
            "liker": self.liker.to_dict()
        }