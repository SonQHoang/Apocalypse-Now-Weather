from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class PrepperTypeForm(FlaskForm):
    prepper_type = StringField("prepper_type", validators=[DataRequired()])
