from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField
from wtforms.validators import DataRequired, Email
from app.models import User

Prepper_Types = ['Nuclear Prepper', 'EMP/Solar Flare Prepper', 'Economic Collapse Prepper', 'Pandemic Prepper',
                'Natural Disaster Prepper', 'Biological/Chemical Attack Prepper', 'Cyber-Attack Prepper', 'Civil Unrest/Martial Law Prepper',
                'Ecological/Environmental Prepper', 'Peak Oil/Resource Depletion Prepper', 'Alien Invasion Prepper', 'Zombie Apocalypse Prepper', 'Generalist Prepper']

class UpdateProfileForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('First Name', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()] )
    location = StringField('Location', validators=[DataRequired()])
    latitude = FloatField('Latitude', validators=[DataRequired()])
    longitude = FloatField('Longitude', validators=[DataRequired()])
    prepper_type = SelectField('Prepper Type', choices=Prepper_Types, validators=[DataRequired()])
    prepper_description = StringField('Prepper Description', validators=[DataRequired()])
    bio = StringField('Short Personal Bio', validators=[DataRequired()])
