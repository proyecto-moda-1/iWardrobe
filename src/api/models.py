from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Gender(enum.Enum):
    mujer = 1
    hombre = 2
    nobinario = 3


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.Enum(Gender), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(120), unique=False, nullable=False)
   
     # RELATIONSHIPS
    # clothes = db.relationship('Clothing', backref="user", lazy=True)
    # outfits = db.relationship('Outfits', backref="user", lazy=True)
    # collection = db.relationship('Collection', backref="user", lazy=True)
    # outfits = db.relationship('Outfits', secondary=business_ownership, back_populates="owners", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.nickname

    def serialize(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            "gender": self.gender.name,
            "email": self.email,
            "image": self.image,
            # do not serialize the password, its a security breach
        }

class Category(enum.Enum):
    top = 1
    bottom = 2
    shoes = 3


class Clothing(db.Model):
     id = db.Column(db.Integer, primary_key=True)
    #  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
     image = db.Column(db.String)
     name = db.Column(db.String(120))
     category = db.Column(db.Enum(Category), unique=False, nullable=False)
     clean= db.Column(db.Boolean, unique=True, nullable=False)

     #RELACIONES
     # outfits = db.relationship('....', secondary=clothing_outfit , back_populates="....", lazy=True)

     def __repr__(self):
         return '<Clothing %r>' % self.name

     def serialize(self):
         return {
            "id": self.id,
            #  "user_id": self.user_id,
             "image": self.image,
             "name": self.name,
             "categories": self.category.name,
             "clean": self.clean,
         }      
     
class Outfit(db.Model):
     id = db.Column(db.Integer, primary_key=True)
    #  user_id = db.Column(db.Integer, unique=True, nullable=False)
     name = db.Column(db.String(120))

     def __repr__(self):
              return '<Outfits %r>' % self.outfits

     def serialize(self):
          return {
              "id": self.id,
            #   "user_id": self.user_id,
              "name": self.name,
         } 

class Collection(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     image = db.Column(db.String(120))
    #  user_id = db.Column(db.Integer, unique=True, nullable=False)
     name = db.Column(db.String(120))

     def __repr__(self):
        return '<Collection %r>' % self.image

     def serialize(self):
        return {
              "id": self.id,
            #   "user_id": self.user_id,
              "image": self.image,
              "name": self.name,
         }     

# clothing_outfit = db.Table(db.Table('clothing_outfit',
#     db.Column('clothing_id', db.Integer, db.ForeignKey('clothing.id'), primary_key=True),
#     db.Column('outfits_id', db.Integer, db.ForeignKey('outfits.id'), primary_key=True)
# )
#     )

# collection_outfit = db.Table(db.Table('collection_outfit',
#     db.Column('outfits_id', db.Integer, db.ForeignKey('outfits.id'), primary_key=True),
#     db.Column('collection_id', db.Integer, db.ForeignKey('collection.id'), primary_key=True)
# )
#     )


    