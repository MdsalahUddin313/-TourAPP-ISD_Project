from backened.models import Authors
from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import viewsets
from .serializers import *
from rest_framework.authtoken.models import Token 
from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

from rest_framework import permissions
# Create your views here.


class AuthorsViewSet(viewsets.ModelViewSet):
    queryset = Authors.objects.all()
    serializer_class =AuthorsSerializer


class categoryViewSet(viewsets.ModelViewSet):
    queryset = category.objects.all()
    serializer_class =CategorySerializer


class Articles_postViewSet(viewsets.ModelViewSet):
    queryset = Articles_post.objects.all()
    serializer_class =Articles_postSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class =CountrySerializer


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class =CitySerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class =LocationSerializer
    


class HotelsViewSet(viewsets.ModelViewSet):
    queryset = Hotels.objects.all()
    serializer_class =HotelsSerializer


class transportsViewSet(viewsets.ModelViewSet):
    queryset = transports.objects.all()
    serializer_class =TransportSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class =UserSerializer
   
class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all().order_by('Comments_code')
    serializer_class =CommentsSerializer