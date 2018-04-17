from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=120)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    #category = models.CharField(max_length=90)
    
class Category(models.Model):
    name = models.CharField(max_length=120)
