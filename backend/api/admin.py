from django.contrib import admin
from api.models import Product, Category

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fields = ('name', 'category')
    list_display = ['name', 'category']
    search_fields = ('name', 'category') 
