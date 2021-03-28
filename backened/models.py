from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Authors(models.Model):    
         firstname=models.CharField(max_length=150)
         lastname=models.CharField(max_length=200)
         username=models.CharField(max_length=150)
         createdAt=models.DateTimeField()
         description=models.TextField()
         def __str__(self):
              return self.username 
         #author is a foreign key from user
         
class category(models.Model):
     title=models.CharField(max_length=150)
     subcategory=models.CharField(max_length=150)
     def __str__(self):
              return self.title


class Articles_post(models.Model):    
         title=models.CharField(max_length=150)
         metatitle=models.CharField(max_length=200)
         category=models.ForeignKey(category,on_delete=models.CASCADE)
         createdAt=models.DateTimeField()
         updatedAt=models.DateTimeField()
         publishedAt=models.DateTimeField()
         content=models.TextField()
         authors=models.ForeignKey(Authors,on_delete=models.CASCADE)
         #author is a foreign key from user
         #images=models.ImageField(upload_to="media" ,height_field=None ,width_field=None, max_length=None,blank=True)
         images=models.TextField(default="")

         def __str__(self):
              return self.title
    
class Country(models.Model):    
         country_name=models.CharField(max_length=150)
         country_code=models.CharField(max_length=15)
         country_imageLink=models.TextField(default="")
         country_Map=models.TextField(default="")
         def __str__(self):
              return self.country_name

class ToDo(models.Model):    
         todo_title_name=models.CharField(max_length=255)         
         def __str__(self):
              return self.todo_title_name
class Done(models.Model):    
         done_title_name=models.CharField(max_length=255)         
         def __str__(self):
              return self.done_title_name

class City(models.Model):    
         city_name=models.CharField(max_length=150)
         city_code=models.CharField(max_length=15)
         country_code=models.ForeignKey(Country, on_delete=models.CASCADE)
         city_imageLink=models.TextField(default="")
         city_Map=models.TextField(default="")
         city_description=models.TextField(default="")
         city_rating=models.FloatField(null=True,max_length=25)
         
         def __str__(self):
              return self.city_name


class Location(models.Model):
       Location_name=models.CharField(max_length=120)
       Location_map=models.TextField(default="")
       Location_image=models.TextField(default="")
       Hotels_name_one=models.CharField(max_length=120)
       Hotels_image_one=models.TextField(default="")
       Hotels_name_two=models.CharField(max_length=120)
       Hotels_image_two=models.TextField(default="")
       Hotels_name_three=models.CharField(max_length=120)
       Hotels_image_three=models.TextField(default="")       
       location_one=models.CharField(max_length=120)
       location_image_one=models.TextField(default="")
       location_name_two=models.CharField(max_length=120)
       location_image_two=models.TextField(default="")
       location_name_three=models.CharField(max_length=120)
       location_image_three=models.TextField(default="")

       def __str__(self):
            return self.Location_name

class ContactUs(models.Model):
       First_name=models.CharField(max_length=120)
       Last_name=models.CharField(max_length=120)
       Email_name=models.CharField(max_length=120)
       Message=models.TextField(blank=True)

       def __str__(self):
            return self.First_name
       


class Hotels(models.Model):    
         hotel_name=models.CharField(max_length=150)
         hotel_code=models.CharField(max_length=15)
         hotel_address=models.CharField(max_length=250)
         hotel_images=models.TextField(default="Add images Link")
         hotel_details=models.TextField(default="")
         is_partner=models.BooleanField(default=False)
         active=models.BooleanField(default=False)
         city_name=models.ForeignKey(City, on_delete=models.CASCADE)
         hotels_location=models.TextField(default="")
         hotels_roomprice=models.IntegerField(default=0)
         def __str__(self):
              return self.hotel_name

         

class transports(models.Model):    
        transport_company_name=models.CharField(max_length=150)
        transport_code=models.CharField(max_length=15)
        transport_address=models.CharField(max_length=250)
        company_type_id=models.IntegerField()
        transport_details=models.TextField()
        is_partner=models.BooleanField(default=False)
        active=models.BooleanField(default=False)
        city_name=models.ForeignKey(City, on_delete=models.CASCADE)



class Comments(models.Model):    
         Comments_name=models.CharField(max_length=150)
         Comments_code=models.AutoField(primary_key=True)

         def __str__(self):
              return self.Comments_name