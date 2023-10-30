"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        user = User()
        if user is not None:
            data = request.get_json()
            user.email = data["email"]
            user.password = data["password"]
            user.is_active = True

            db.session.add(user)
            db.session.commit()

            return jsonify({
                "msg": "Usuario creado",
                "estado": "éxito"
            }), 200
        else:
            return jsonify({
                "msg": "Usuario creado",
                "estado": "éxito"
            }), 404


@api.route('/login', methods=['POST'])
def login():
    if user is not None:
        data = request.get_json()
        user = User.query.filter_by(email=data["rut"]).first()
