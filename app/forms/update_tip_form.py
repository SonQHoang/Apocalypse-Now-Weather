from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired
from app.models import Tips

class UpdateTip(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    weather_category = StringField("Weather Category", validators=[DataRequired()])
    body = StringField("Body", validators=[DataRequired()])
    date_created = DateField("Date Created")