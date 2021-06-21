from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Gender(enum.Enum):
    female = 1
    male = 2
    nonbinary = 3


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.Enum(Gender), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(120), unique=False, nullable=False)
    repeat_password = db.Column(db.String(120), unique=False, nullable=False)
   
     # RELATIONSHIPS
    clothes = db.relationship('Clothing', backref="user", lazy=True)
    outfits = db.relationship('Outfit', backref="user", lazy=True)
    collections = db.relationship('Collection', backref="user", lazy=True)
    
    
    @staticmethod
    def get_login_credentials(email, password):
        return User.query.filter_by(email=email).filter_by(password=password).first()
    
    # def assign_token(self, token):
    #     self.token= token
    #     db.session.add(self)
    #     db.session.commit()
    
    @staticmethod
    def get_user_by_email(email):
        return User.query.filter_by(email=email).first()
    


    def __repr__(self):
        return '<User %r>' % self.nickname


    def serialize(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            "gender": self.gender.name,
            "email": self.email,
            # "image": self.image,
            # "token": self.token
            # do not serialize the password, its a security breach
        }


clothing_outfit = db.Table('clothing_outfit',
    db.Column('clothing_id', db.Integer, db.ForeignKey('clothing.id'), primary_key=True),
    db.Column('outfit_id', db.Integer, db.ForeignKey('outfit.id'), primary_key=True)
)

class Category(enum.Enum):
    top = 1
    bottom = 2
    footwear = 3


class Clothing(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
     image = db.Column(db.String, unique=False, nullable=False)
     name = db.Column(db.String(120), unique=False, nullable=False)
     category = db.Column(db.Enum(Category), unique=False, nullable=False)
     clean= db.Column(db.Boolean, unique=False, nullable=False)


     #RELACIONES
     outfits = db.relationship('Outfit', secondary= clothing_outfit , back_populates="clothing_items", lazy=True)

     def create_clothing(self):
         db.session.add(self)
         db.session.commit()
     
     def __repr__(self):
         return '<Clothing %r>' % self.name

     def serialize(self):
         return {
             "id": self.id,
             "user_id": self.user_id,
             "image": self.image,
             "name": self.name,
             "categories": self.category.name,
             "clean": self.clean,
         } 

collection_outfit = db.Table('collection_outfit',
    db.Column('outfit_id', db.Integer, db.ForeignKey('outfit.id'), primary_key=True),
    db.Column('collection_id', db.Integer, db.ForeignKey('collection.id'), primary_key=True)
)
                  
     
class Outfit(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     outfit_user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
     name = db.Column(db.String(120))
     favorite = db.Column(db.Boolean, unique=False, nullable=False)

    #RELACIONES
     clothing_items = db.relationship('Clothing', secondary= clothing_outfit , back_populates="outfits", lazy=True)
     collections = db.relationship('Collection', secondary= collection_outfit , back_populates="outfits", lazy=True)
     
     @staticmethod
     def get_outfit_by_user_id(user_id):
         return Outfit.query.filter_by(outfit_user_id=user_id).all()

     def __repr__(self):
              return '<Outfit %r>' % self.name

     def serialize(self):
         serialize_clothing = []
         for clothing in self.clothing_items:
            serialize_clothing.append(clothing.serialize())
         return {
              "id": self.id,
              "outfit_user_id": self.outfit_user_id,
              "name": self.name,
              "clothing": serialize_clothing,
              "favorite": self.favorite
         } 

class Collection(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     image = db.Column(db.String(120))
     collection_user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
     name = db.Column(db.String(120))

     #RELACIONES
     outfits= db.relationship('Outfit', secondary= collection_outfit , back_populates="collections", lazy=True)


     def __repr__(self):
        return '<Collection %r>' % self.image

     def serialize(self):
        return {
              "id": self.id,
              "user_id": self.user_id,
              "image": self.image,
              "name": self.name,
         }     






    