from django.contrib import admin
from api.models import Product, Category, Tag

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fields = ('name', 'category', 'carbs', 'proteins', 'fats', 'weight', 'glycemic_index', 'tag')
    list_display = ['name', 'category', 'weight', 'carbs', 'proteins', 'fats', 'get_carbohydrate_exchange']
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
