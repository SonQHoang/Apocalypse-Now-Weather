from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models.models import Tips, TipComments
from app.seeds.tip_comments import tip_comments
from app.seeds.tips import tips

with app.app_context():
    db.drop_all()
    db.create_all()

    for tip_data in tips:
        new_tip = Tips(**tip_data)
        db.session.add(new_tip)

    for tip_comment_data in tip_comments:
        new_tip_comment = TipComments(**tip_comment_data)
        db.session.add(new_tip_comment)
    
    db.session.commit()