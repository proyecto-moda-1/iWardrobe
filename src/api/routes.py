"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.models import db, User, Clothing, Outfit, Collection
from api.utils import generate_sitemap, APIException
from api.models import Category
import os
import cloudinary
import cloudinary.uploader
import cloudinary.api


api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()

    serialized_users = []
    for user in all_users:
        serialized_users.append(user.serialize())
    print(all_users)

    return jsonify(serialized_users), 200


@api.route('/register', methods=['POST'])
def create_users():

    payload = request.get_json()
    user_create = User(nickname=payload['nickname'],
    gender=payload['gender'],
    email=payload['email'],
    password=payload['password'],
    # image=payload['image'],
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
@jwt_required()
def get_all_clothings():
    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    args = request.args

    if "category" in args :
        # for element in Category:
        #     if element.name == args.get("category"):
        #         category_value = element.value
        #         break
        category_value = args.get("category")
        all_clothings = Clothing.query.filter_by(category=category_value)

    else:
        all_clothings = Clothing.query.all()
    serialized_clothings = []
    for clothing in all_clothings:
        serialized_clothings.append(clothing.serialize())
    return jsonify(serialized_clothings), 200

@api.route('/clothing/<int:id>', methods=['GET'])
def get_clothing(id):

    clothing = Clothing.query.get(id)
    serialized_clothing = clothing.serialize()

    return jsonify(serialized_clothing), 200

@api.route('/clothing', methods=['POST'])
@jwt_required()
def create_clothing():
    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)

    user_id = request.form['user_id']
    if user_id is None or user_id == 0:
        return "Please, provide a valid user_id", 400

    name = request.form['name']
    if name is None or name == 0:
        return "Provide a valid name", 400

    category = request.form['category']
    if category is None or category == 0:
        return "Provide a valid category", 400

    print(request.files)
    image = request.files['image']
    if image is None or image == 0:
        return "Provide a valid image", 400


    cloudinary.config(cloud_name = os.getenv('CLOUD_NAME'), api_key=os.getenv('API_KEY'), api_secret=os.getenv('API_SECRET'))
    result = cloudinary.uploader.upload(image)

    clothing = Clothing(user_id=user_id, name=name, category=category, image=result['secure_url'], dirty=False)
    clothing.create_clothing()

    return "Created", 201

@api.route('/outfit', methods=['GET'])
def get_all_outfits():
    all_outfits = Outfit.query.filter_by(today_outfit=False, deleted=False)

    serialized_outfits = []
    for outfit in all_outfits:
        serialized_outfits.append(outfit.serialize())
    print(all_outfits)

    return jsonify(serialized_outfits), 200

@api.route('/outfit/<int:id>', methods=['DELETE'])
def outfit(id):

    outfit = Outfit.query.get_or_404(id)
    print(outfit, "prueba delete")
    outfit.deleted = True
    db.session.commit()
    return 'Removed outfit', 204


@api.route('/users/today_outfits', methods=['GET'])
@jwt_required()
def get_user_today_outfits():
        user_email = get_jwt_identity()
        user= User.get_user_by_email(user_email)
        get_all_outfits = Outfit.get_today_outfit_by_user_id(user.id)
        serialized_outfit = []
        for outfit in get_all_outfits:
            serialized_outfit.append(outfit.serialize())
        return jsonify(serialized_outfit), 200

@api.route('/today_outfit/<int:outfit_id>', methods=['POST'])
def today_outfit(outfit_id):
    outfit = Outfit.query.filter_by(id=outfit_id).first()
    outfit.today_outfit= not outfit.today_outfit
    db.session.commit()
    return jsonify ({"Message":"Ok"}), 201

@api.route('/outfit', methods=['POST'])
def create_outfit():
    body = request.get_json()
    if body is None:
        return "The request body is null", 400

    outfit_user_id = body.get('outfit_user_id')
    if outfit_user_id is None or outfit_user_id == 0:
        return "Please, provide a valid outfit_user_id", 400

    name = body.get('name')
    if name is None or name == 0:
        return "Provide a valid name", 400

    collectionId = body.get('collectionId')
    if collectionId is None or collectionId == 0:
        outfit = Outfit(outfit_user_id=outfit_user_id, name=name, today_outfit= body.get("today"))
        clothings =[]
        if body.get("clothings"):
            for key, value in body.get("clothings").items():
                if value:
                    clothings.append(Clothing.query.filter_by(id=value["id"]).first())
        outfit.clothing_items=clothings
        outfit.create_outfit()
        return "Created", 201
    else:
        outfit = Outfit(outfit_user_id=outfit_user_id, name=name,today_outfit= body.get("today"))
        clothings =[]
        if body.get("clothings"):
            for key, value in body.get("clothings").items():
                if value:
                    clothings.append(Clothing.query.filter_by(id=value["id"]).first())
        outfit.clothing_items=clothings
        outfit.create_outfit()
        collection =Collection.query.filter_by(id=collectionId).first()
        collection.outfits.append(outfit)
        db.session.commit()
        return "Created", 201

@api.route('/users/outfits', methods=['GET'])
@jwt_required()
def get_user_outfits():
    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    get_all_outfits = Outfit.get_outfit_by_user_id(user.id)
    serialized_outfit = []
    print(user_email, user, user.serialize(),get_all_outfits)
    for outfit in get_all_outfits:
        serialized_outfit.append(outfit.serialize())
    print(serialized_outfit)
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

@api.route('/collection', methods=['POST'])
@jwt_required()
def create_collection():
    user_email = get_jwt_identity()
    user = User.get_user_by_email(user_email)

    body = request.get_json()
    if body is None:
        return "The request body is null", 400

    collection_user_id = body.get('collection_user_id')
    if collection_user_id is None or collection_user_id == 0:
        return "Please, provide a valid collection_user_id", 400

    name = body.get('name')
    if name is None or name == 0:
        return "Provide a valid name", 400
    

    collection = Collection(collection_user_id=collection_user_id, name=name)
    collection.create_collection()

    return "Created collection", 201

@api.route('/users/outfits/<outfit_id>/favorite', methods=['PUT'])
@jwt_required()
def favorite_brand(outfit_id):

    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    outfit= Outfit.query.filter_by(outfit_user_id=user.id, id=outfit_id).first()
    # payload= request.get_json()
    outfit.favorite= not outfit.favorite
    db.session.commit()
    return "fav updated", 200

@api.route('/users/clothing/<int:clothing_id>/dirty', methods=['PUT'])
@jwt_required()
def laundry_clothing(clothing_id):
    print("#########")
    user_email = get_jwt_identity()
    print(get_jwt_identity())
    user= User.get_user_by_email(user_email)
    print(user)
    clothing= Clothing.query.filter_by(user_id=user.id, id=clothing_id).first()
    print(clothing)
    clothing.dirty= not clothing.dirty
    db.session.commit()
    return "Laundry updated", 200 


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


@api.route('/users/clothing/dirty', methods=['GET'])
@jwt_required()
def get_user_dirty():
    user_email = get_jwt_identity()
    user= User.get_user_by_email(user_email)
    dirty_clothing = Clothing.get_dirty_user_clothings(user.id)
        
    serialized_dirty = []
    for dirty in dirty_clothing:
        serialized_dirty.append(dirty.serialize())
    return jsonify(serialized_dirty), 200 







