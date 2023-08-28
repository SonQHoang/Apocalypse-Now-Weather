from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class TipLikes(db.Model):
    __tablename__ = "tip_likes"
    id = db.Column(db.Integer, primary_key=True)
    tip_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('tips.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    # TipLikes has a many to one relationship with Tips and Users
    tip = db.relationship('Tips', back_populates='likes')
    liker = db.relationship('User', back_populates='tip_likes')

    def to_dict(self):
        return {
            "id": self.id,
            "tip_id": self.tip_id,
            "user_id": self.user_id,
            "tip": self.tip.to_dict(),
            "liker": self.liker.to_dict()
        }