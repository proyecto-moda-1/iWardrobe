"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.models import db, User, Clothing, Outfit, Collection
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()

    serialized_users = []
    for user in all_users:
        serialized_users.append(user.serialize())
    print(all_users)

    return jsonify(serialized_users), 200

# @app.route('/user/<int:id>', methods=['GET'])
# def get_user(id):

#     user = User.query.get(id)
#     serialized_user = user.serialize()
#     return jsonify(serialized_user), 200
    

@api.route('/user', methods=['POST'])
def create_users():

    payload = request.get_json()
    user_create = User(nickname=payload['nickname'],
    gender=payload['gender'], 
    email=payload['email'], 
    image=payload['image'],
    password=payload['password'],
    token=payload['token'])
    db.session.add(user_create)
    db.session.commit()

    return jsonify(user_create.serialize()), 200

@api.route('/login', methods=['POST'])
def handle_login():
    json = request.get_json()

    # if json is None:
    #     raise APIException("json body")

    # if "email" not in json or "password" not in json:
    #     raise APIException("Email&Pasword")

    email = json["email"]
    password= json["password"]

    user= User.get_login_credentials(email, password)

    # if user is None:
    #     raise APIException("user does not exist")

    access_token = create_access_token(identity=user.email)

    return jsonify({'token':access_token}), 200


@api.route('/profile', methods=['GET'])
@jwt_required()
def handle_profile():

  
    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    return jsonify(user.serialize()), 200



    
@api.route('/clothing', methods=['GET'])
def get_all_clothings():
    all_clothings = Clothing.query.all()

    serialized_clothings = []
    for clothing in all_clothings:
        serialized_clothings.append(clothing.serialize())
    print(all_clothings)

    return jsonify(serialized_clothings), 200

@api.route('/clothing/<int:id>', methods=['GET'])
def get_clothing(id):

    clothing = Clothing.query.get(id)
    serialized_clothing = clothing.serialize()

    return jsonify(serialized_clothing), 200 

@api.route('/clothing', methods=['POST'])
def create_clothing():

    payload = request.get_json()
    

    new_clothing = Clothing(user_id=payload['user_id'], name=payload['name'], category=payload['category'], clean=payload['clean'])

    db.session.add(new_clothing)
    db.session.commit()

    return jsonify(new_clothing.serialize()), 200   



@api.route('/outfit', methods=['GET'])
def get_all_outfits():
    all_outfits = Outfit.query.all()

    serialized_outfits = []
    for outfit in all_outfits:
        serialized_outfits.append(outfit.serialize())
    print(all_outfits)

    return jsonify(serialized_outfits), 200

@api.route('/collection', methods=['GET'])
def get_all_collections():
    all_collections = Collection.query.all()

    serialized_collections = []
    for collection in all_collections:
        serialized_collections.append(collection.serialize())
    print(all_collections)

    return jsonify(serialized_collections), 200   


    

        