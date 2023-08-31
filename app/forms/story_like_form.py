from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import Stories

class NewStoryLikeForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    story_id = IntegerField("story_id", validators=[DataRequired()])
