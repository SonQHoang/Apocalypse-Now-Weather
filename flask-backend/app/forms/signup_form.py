from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


Prepper_Types = ['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
                 'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
                 'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper']



class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('Email', validators=[DataRequired(), user_exists])
    password = StringField('Password', validators=[DataRequired()])
    latitude = FloatField('Latitude', validators=[DataRequired()])
    longitude = FloatField('Longitude', validators=[DataRequired()])
    prepper_type = SelectField('Prepper Type', choices=Prepper_Types, validators=[DataRequired()])
    bio = StringField('Short Personal Bio', validators=[DataRequired()])
