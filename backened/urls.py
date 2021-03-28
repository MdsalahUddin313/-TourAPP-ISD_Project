from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import *
from rest_framework.routers import DefaultRouter



# Create a router and register our viewsets with it.
router = DefaultRouter()
#router.register(r'artical', views.ArticalViewSet)
#router.register(r'user', views.UserViewSet)
#router =DefaultRouter()
router.register('authors',AuthorsViewSet ,basename='Authors')
router.register('category',categoryViewSet ,basename='Category')
router.register('articles',Articles_postViewSet ,basename='Article Post')
router.register('country',CountryViewSet ,basename='Country')
router.register('city',CityViewSet,basename='City')
router.register('hotels',HotelsViewSet,basename='Hotel')
router.register('transport',transportsViewSet,basename='Transport')
router.register('users',UserViewSet ,basename='users')
router.register('comments',CommentsViewSet ,basename='comments')
router.register('locations',LocationViewSet ,basename='locations')
router.register('ContactUs',ContactUsViewSet ,basename='ContactUs')
router.register('todo',ToDoViewSet ,basename='todo')
router.register('done',DoneViewSet ,basename='done')
router.register('gallery',GalleryViewSet ,basename='gallery')


#router.register('users',views.UserViewSet ,basename='users')

urlpatterns = [
  
    path("apis/" , include(router.urls)),
    
]