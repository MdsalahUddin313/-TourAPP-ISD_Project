from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Authors(models.Model):    
         firstname=models.CharField(max_length=150)
         lastname=models.CharField(max_length=200)
         username=models.CharField(max_length=150)
         createdAt=models.DateTimeField()
         description=models.TextField()
         #author is a foreign key from user
         
class category(models.Model):
     title=models.CharField(max_length=150)
     subcategory=models.CharField(max_length=150)


class Articles_post(models.Model):    
         title=models.CharField(max_length=150)
         metatitle=models.CharField(max_length=200)
         category=models.ForeignKey(category,on_delete=models.CASCADE)
         createdAt=models.DateTimeField()
         updatedAt=models.DateTimeField()
         publishedAt=models.DateTimeField()
         content=models.TextField()
         #author is a foreign key from user
         authors=models.ForeignKey(Authors,on_delete=models.CASCADE)
         images=models.ImageField(upload_to="media" ,height_field=None ,width_field=None, max_length=None,blank=True)

    
class Country(models.Model):    
         country_name=models.CharField(max_length=150)
         country_code=models.CharField(max_length=15)
         

class City(models.Model):    
         city_name=models.CharField(max_length=150)
         city_code=models.CharField(max_length=15)
         country_code=models.ForeignKey(Country, on_delete=models.CASCADE)
         

class Hotels(models.Model):    
         hotel_name=models.CharField(max_length=150)
         hotel_code=models.CharField(max_length=15)
         hotel_address=models.CharField(max_length=250)
         hotel_details=models.TextField()
         is_partner=models.BooleanField(default=False)
         active=models.BooleanField(default=False)
         city_name=models.ForeignKey(City, on_delete=models.CASCADE)


         

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