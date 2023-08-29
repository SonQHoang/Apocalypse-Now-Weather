from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class TipComments(db.Model):
    __tablename__ = "tip_comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    tip_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('tips.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    body = db.Column(db.String, nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)

    # TipComments has a many to one relationship with Tips and Users
    tip = db.relationship('Tips', back_populates='comments')
    commenter = db.relationship('User', back_populates='tip_comments')

    def to_dict(self):
        return {
            "id": self.id,
            "tip_id": self.tip_id,
            "user_id": self.user_id,
            "body": self.body,
            "date_created": self.date_created,
            "tip": self.tip.to_dict(),
            "commenter": self.commenter.to_dict() 
        }