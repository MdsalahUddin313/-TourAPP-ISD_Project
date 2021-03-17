
from django.db.models import fields
from rest_framework import serializers
from rest_framework.authtoken.models import Token 
from .models import *
from django.contrib.auth.models import User



class AuthorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = ['firstname', 'lastname','username','createdAt','description']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = ['title', 'subcategory']

class Articles_postSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles_post
        fields = ['title', 'metatitle','category','createdAt','updatedAt','publishedAt','content','authors','images']


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['country_name', 'country_code','country_imageLink','country_Map']

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['city_name', 'city_code', 'country_code','city_imageLink','city_Map','city_description','city_rating']

class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = ['hotel_name', 'hotel_code', 'hotel_address','hotel_details','is_partner','active','city_name','hotel_images']

class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = transports
        fields = ['transport_company_name', 'transport_code', 'transport_address','company_type_id','transport_details','is_partner','active','city_name']



class CommentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comments
        fields = ['Comments_name', 'Comments_code']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

    