"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Clothing, Outfit, Collection
from api.utils import generate_sitemap, APIException
from api.models import Category

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()

    serialized_users = []
    for user in all_users:
        serialized_users.append(user.serialize())
    print(all_users)

    return jsonify(serialized_users), 200

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


@api.route('/clothing', methods=['GET'])
def get_clothing_by_category():

    args = request.args
    if "category" in request.args:
        if request.args == "top":
            clothing = Clothing.query.filter(category=Category.Top)

        if request.args == "botttom":
            clothing = Clothing.query.filter(category=Category.Bottom)

        if  request.args == "botttom":
            clothing = Clothing.query.filter(category=Category.Footwear)

    for category in clothing_by_category:
        serealized_clothing = clothing.serialize("top")

    for category in clothing_by_category:
        serealized_clothing = clothing.serialize("botttom")

    for category in clothing_by_category:
        serealized_clothing = clothing.serialize("footwear")

    return jsonify(serealized_clothing), 200

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

    outfit = Outfit(outfit_user_id=outfit_user_id, name=name)
    outfit.create_outfit()

    return "Created", 201


@api.route('/collection', methods=['GET'])
def get_all_collections():
    all_collections = Collection.query.all()

    serialized_collections = []
    for collection in all_collections:
        serialized_collections.append(collection.serialize())
    print(all_collections)

    return jsonify(serialized_collections), 200  

@api.route('/collection', methods=['POST'])
def create_collection():

    body = request.get_json()
    if body is None:
        return "The request body is null", 400
    
    collection_user_id = body.get('collection_user_id')
    if collection_user_id is None or collection_user_id == 0:
        return "Please, provide a valid collection_user_id", 400

    name = body.get('name')
    if name is None or name == 0:
        return "Provide a valid name", 400

    image = body.get('image')
    if image is None or image == 0:
        return "Provide a valid image", 400

    collection = Collection(collection_user_id=collection_user_id, name=name, image=image)
    collection.create_collection()

    return "Created collection", 201

      

      


    

        