from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Stories

class PostComment(FlaskForm):
    body = StringField("body", validators=[DataRequired()])

