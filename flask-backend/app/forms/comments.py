from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FieldList, FloatField
from wtforms.validators import DataRequired, NumberRange, URL

class CommentForm(FlaskForm):
    # story_id
    # user_id
    # date_created
    comment = StringField("Name", validators=[DataRequired()])
