from django.contrib import admin
from .models import Authors, Comments,category,Articles_post,Country,City,Hotels,transports,Location 
# Register your models here.

admin.site.register(Authors)
admin.site.register(category)
admin.site.register(Articles_post)
admin.site.register(Country)
admin.site.register(City)
admin.site.register(Hotels)
admin.site.register(transports)
admin.site.register(Comments)
admin.site.register(Location)




#@admin.register(Comments)
#class CommentsModel(admin.ModelAdmin):
 #   list_filter = ('Comments_name', 'Comments_code')
 #   list_display = ('Comments_name', 'Comments_code')