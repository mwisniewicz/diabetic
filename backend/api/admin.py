from django.contrib import admin
from api.models import Product, Category, Tag, UserManager

@admin.register(UserManager)
class UserManagerAdmin(admin.ModelAdmin):
	fields = ('user', 'username', 'date_of_birth', 'description', 'image')
	list_display = ['user', 'username', 'date_of_birth', 'description', 'image', 'get_age']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fields = ('name', 'category', 'tag')
    list_display = ['name', 'category']
    search_fields = ('name', 'category')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ('name',)
    list_display = ['name',]
    serach_fields = ('name',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    fields = ('name',)
    list_display = ['name',]
    serach_fields = ('name',)
