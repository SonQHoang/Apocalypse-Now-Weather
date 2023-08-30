from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    commentBody = StringField("Caption", validators=[DataRequired()])
    userId = IntegerField("user_id",validators=[DataRequired()])
    storyId = IntegerField("story_id", validators=[DataRequired()])


class TipCommentForm(FlaskForm):
    body = StringField("Caption", validators=[DataRequired()])
    user_id = IntegerField("user_id",validators=[DataRequired()])
    tip_id = IntegerField("story_id", validators=[DataRequired()])
