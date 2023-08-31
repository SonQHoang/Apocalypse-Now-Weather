from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired

class CreateTip(FlaskForm):
    user_id = IntegerField('User_Id')
    title = StringField("Title", validators=[DataRequired()])
    weather_category = StringField("Weather Category", validators=[DataRequired()])
    body = StringField("Body", validators=[DataRequired()])
    date_created = DateField("Date Created")