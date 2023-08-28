from flask import Blueprint, request, jsonify
from ..models import Tips, db

bp = Blueprint("tip", __name__, url_prefix="")

@bp.route('/tips')
def get_all_tips():
    tips = Tips.query.all()
    tips_data = [{
        "title": tip.title,
        "weather_category": tip.weather_category,
        "body": tip.body
    } for tip in tips]
    print('This is my tips data=====>', tips_data)
    return jsonify(tips_data)

@bp.route('/tips', methods=["POST"])
def create_new_tip():
    data = request.json
    return jsonify(data)

@bp.route('/tips/<int:tip_id>', methods=["DELETE"])
def delete_tip(tip_id):
    tip = Tips.query.get(tip_id)
    if tip:
        db.session.delete(tip)
        db.session.commit()
        return jsonify(message='Tip deleted successfully'), 200
    else:
        return jsonify(message='Tip not found'), 404