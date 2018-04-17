from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Product, Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Product
        fields = ('name', 'category')

