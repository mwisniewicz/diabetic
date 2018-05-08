from django.db import models
from django.contrib.auth.models import User
import datetime

class UserManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.username

    def get_age(self):
        age = datetime.datetime.now()
        return age

class Category(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=120)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    #carbs = models.FloatField(default=0)
    #proteins = models.FloatField(default=0)
    #fats = models.FloatField(default=0)
    #weight = models.FloatField(default=0)
    #glycemic_index = models.IntegerField(default=0)
    tag = models.ManyToManyField(Tag, related_name = 'Tags')
    #user = models.ForeignKey(User, on_delete=models.CASCADE)

    #def get_carbs_weight(self):
    #    return (self.carbs/100.0)*self.weight

    #def get_prots_weight(self):
    #    return (self.proteins/100.0)*self.weight

    #def get_fats_weight(self):
    #    return (self.fats/100.0)*self.weight

    #def get_carbohydrate_exchange(self):
    #    return self.get_carbs_weight()/10.0

    def __str__(self):
        return self.name
