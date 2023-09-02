from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}




# prepper_descriptions = {
#     'Nuclear Prepper': 'These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.',
#     'EMP/Solar Flare Prepper': 'They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.',
#     'Economic Collapse Prepper': 'These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.',
#     'Pandemic Prepper': 'Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.',
#     'Natural Disaster Prepper': 'Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.',
#     'Biological/Chemical Attack Prepper': 'These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.',
#     'Cyber-Attack Prepper': 'With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.',
#     'Civil Unrest or Martial Law Prepper': 'They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.',
#     'Ecological/Environmental Prepper': 'Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.',
#     'Peak Oil/Resource Depletion Prepper': 'They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don\'t rely on fossil fuels.',
#     'Alien Invasion Prepper': 'While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.',
#     'Zombie Apocalypse Prepper': 'Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.',
#     'Generalist Prepper': 'Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.'
# }




@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    # print("INSIDE SIGNUP FUNCTION")
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print("******form email type*******",type(form.email.data))
    # print("******email data*****", form.email.data)
    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            location=form.data['location'],
            latitude=form.data['latitude'],
            longitude=form.data['longitude'],
            prepper_type=form.data['prepper_type'],
            prepper_description=form.data['prepper_description'],
            bio=form.data['bio']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        # redirect('/')
        return user.to_dict()
    # print("form errors**********",form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
