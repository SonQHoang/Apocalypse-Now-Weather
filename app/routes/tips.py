from flask import Blueprint, request, jsonify
from ..models import Tips, db
from app.forms.create_tip_form import CreateTip
from datetime import datetime
from flask_login import current_user, login_required

bp = Blueprint("tip", __name__, url_prefix="")

@bp.route('/tips')
def get_all_tips():
    tips = Tips.query.all()
    tips_data = [{
        "title": tip.title,
        "weather_category": tip.weather_category,
        "body": tip.body,
        "user_id": tip.user_id,
        "date_created": tip.date_created
    } for tip in tips]
    # print('This is my tips data=====>', tips_data)
    return jsonify(tips_data)

# @login_required
@bp.route('/<int:userId>/tips', methods=["POST"])
def create_new_tip(userId):
    # print('===============+>', userId)
    form = CreateTip()
    # print('form==========>', form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_tip = Tips(
            user_id = userId,
            id = form.data['Id'],
            title = form.data["title"],
            weather_category = form.data["weather_category"],
            body = form.data["body"],
            date_created = datetime.utcnow()
        )
        db.session.add(new_tip)
        db.session.commit()
        # print('=============================>', new_tip.to_dict())
        return new_tip.to_dict()
    return {'errors': 'error'}, 401


# @login_required
@bp.route('/user_tips', methods=["GET"])
def get_user_tips():
    # print(user_id)
    tips = Tips.query.filter_by(user_id = current_user.id).all()
    return [tip.to_dict() for tip in tips]



@bp.route('/tips/<int:tip_id>')
def get_tip_by_id(tip_id):
    tip = Tips.query.get(tip_id)
    
    if tip is None:
        return jsonify({"error": "Tip not found"}), 404
    
    tip_data = {
    "title": tip.title,
    "weather_category": tip.weather_category,
    "body": tip.body
}
    return jsonify(tip_data)

# @login_required
@bp.route('/tips/<int:tipId>', methods=["DELETE"])
def delete_tip(tipId):
    tip_to_delete = Tips.query.get(tipId)
    db.session.delete(tip_to_delete)
    db.session.commit()
    return {'message':'deleted'}