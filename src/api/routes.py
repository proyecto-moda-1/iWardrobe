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
    

@api.route('/register', methods=['POST'])
def create_users():

    payload = request.get_json()
    user_create = User(nickname=payload['nickname'],
    gender=payload['gender'], 
    email=payload['email'],
    password=payload['password'],
    image=payload['image'],
    repeat_password=payload['repeat_password'])

    db.session.add(user_create)
    db.session.commit()
    access_token = create_access_token(identity=user_create.email)

    return jsonify({
        'user':user_create.serialize(), 
        'token': access_token
        }), 200

@api.route('/login', methods=['POST'])
def handle_login():
    json = request.get_json()

    email = json["email"]
    password= json["password"]

    user= User.get_login_credentials(email, password)

    if user is None:
        raise APIException("user does not exist")
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

    body = request.get_json()
    if body is None:
        return "The request body is null", 400
    
    user_id = body.get('user_id')
    if user_id is None or user_id == 0:
        return "Please, provide a valid user_id", 400

    name = body.get('name')
    if name is None or name == 0:
        return "Provide a valid name", 400

    category = body.get('category')
    if category is None or category == 0:
        return "Provide a valid category", 400

    image = body.get('image')
    if image is None or image == 0:
        return "Provide a valid image", 400

    clothing = Clothing(user_id=user_id, name=name, category=category, image=image, clean=True)
    clothing.create_clothing()

    return "Created", 201
  

@api.route('/outfit', methods=['GET'])
def get_all_outfits():
    all_outfits = Outfit.query.all()

    serialized_outfits = []
    for outfit in all_outfits:
        serialized_outfits.append(outfit.serialize())
    print(all_outfits)

    return jsonify(serialized_outfits), 200


@api.route('/users/outfits', methods=['GET'])
@jwt_required()
def get_user_outfits():
        user_email = get_jwt_identity()
        user= User.get_user_by_email(user_email)
        get_all_outfits = Outfit.get_outfit_by_user_id(user.id)
        serialized_outfit = []
        for outfit in get_all_outfits:
            serialized_outfit.append(outfit.serialize())
        return jsonify(serialized_outfit), 200 


@api.route('/collections', methods=['GET'])
@jwt_required()
def get_user_collection():
        user_email = get_jwt_identity()
        user = User.get_user_by_email(user_email) 
        get_all_collections = Collection.get_collection_by_user_id(user.id)                           
        serialized_collection = []
        for collection in get_all_collections:
            serialized_collection.append(collection.serialize())
        return jsonify(serialized_collection), 200 



@api.route('/collection', methods=['GET'])
def get_all_collections():
    all_collections = Collection.query.all()

    serialized_collections = []
    for collection in all_collections:
        serialized_collections.append(collection.serialize())
    print(all_collections)

    return jsonify(serialized_collections), 200   



@api.route('/users/outfits/<outfit_id>/favorite', methods=['PUT'])
@jwt_required()
def favorite_brand(outfit_id):

    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    outfit= Outfit.query.by(outfit_user_id=user.id, id=outfit_id).first()

    payload= request.get_json()
    favorite= ['favorite']

    outfit.favorite= favorite

    db.session.commit()
    return jsonify(outfit.serialize ), 200 


@api.route('/users/outfits/favorite', methods=['GET'])
@jwt_required()
def get_user_favorite():
        user_email = get_jwt_identity()
        user= User.get_user_by_email(user_email)
        favorite_outfit = Outfit.get_favorite_user_outfits(user.id)
        
        serialized_favorites = []
        for favorite in favorite_outfit:
            serialized_favorites.append(favorite.serialize())
        return jsonify(serialized_favorites), 200 










