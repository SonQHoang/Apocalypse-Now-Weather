from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Tips(db.Model):
    __tablename__ = "tips"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    weather_category = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)

    # Tips has a one => many relationship with users, tipComments, TipLikes
    author = db.relationship('User', back_populates='tips')
    comments = db.relationship('TipComments', back_populates='tip', cascade='all, delete-orphan')
    likes = db.relationship('TipLikes', back_populates='tip', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "weather_category": self.weather_category,
            "title": self.title,
            "body": self.body,
            "date_created": self.date_created,
            "author": self.author.to_dict()
        }
    
