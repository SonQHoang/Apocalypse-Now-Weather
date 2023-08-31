from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Location(db.Model):
    __tablename__ = "locations"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    city = db.Column(db.String)
    state = db.Column(db.String)
    country = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)

    # Location has a one to one relationship with User
    user = db.relationship('User', back_populates='location2')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "zipcode": self.zipcode
        }