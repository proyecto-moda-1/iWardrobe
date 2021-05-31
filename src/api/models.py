from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class MyEnum(enum.Enum):
    one = "mujer"
    two = "hombre"
    three = "no binario"


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.Enum(MyEnum), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(120), unique=False, nullable=False)
   

    def __repr__(self):
        return '<User %r>' % self.user

    def serialize(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            "gender": self.gender,
            "email": self.email,
            "image": self.image,
            # do not serialize the password, its a security breach
        }

# class MyEnum(enum.Enum):
#     one = "parte superior"
#     two = "parte inferior"
#     three = "....."


class Clothing(db.Model):
     id = db.Column(db.Integer, primary_key=True)
    #  user_id = db.Column(db.Integer, db.ForeingKey('user.id'), unique=True, nullable=False)
     image = db.Column(db.String)
    #  categories = db.Column(db.Enum(MyEnum), unique=False, nullable=False)
     clean= db.Column(db.Boolean, unique=True, nullable=False)

     def __repr__(self):
         return '<Clothing %r>' % self.clothing

     def serialize(self):
         return {
            "id": self.id,
             "user_id": self.user_id,
             "image": self.image,
             "categories": self.categories,
             "clean": self.clean,
         }      
     
# clothing_outfit = db.Table('clothing_outfit',
#     db.Column('clothing.id', db.Integer, db.ForeingKey('clothing.id', primary_key=True),
#     db.Column('outfit.id', db.Integer, db.ForeingKey('outfit.id', primary_key=True)
# ) 

class Outfits(db.Model):
     id = db.Column(db.Integer, primary_key=True)
    #  user_id = db.Column(db.Integer,db.ForeingKey('user.id'), unique=True, nullable=False)

     def __repr__(self):
              return '<Outfits %r>' % self.outfits

     def serialize(self):
          return {
              "id": self.id,
              "user_id": self.user_id,
         }      

# collection_outfit = db.Table('collection_outfit',
#     db.Column('outfit.id', db.Integer, db.ForeingKey('outfit.id', primary_key=True),
#     db.Column('collection.id', db.Integer, db.ForeingKey('collection.id', primary_key=True)
# )

class Collection (db.Model):
     id = db.Column(db.Integer, primary_key=True)
    #  user_id = db.Column(db.Integer, unique=True, nullable=False), ForeingKey('user.id')
     image = db.Column(db.String(120))

     def __repr__(self):
        return '<Collection %r>' % self.collection

     def serialize(self):
        return {
              "id": self.id,
              "user_id": self.user_id,
              "image": self.image,
         } 



# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }