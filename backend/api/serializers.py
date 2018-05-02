from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Product, Category, Tag


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups', 'password')

        extra_kwargs = {'password' : {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.cerate_user(**validated_data)
        return user

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer()
    tag = TagSerializer(many=True)
    class Meta:
        model = Product
        fields = ('id', 'name', 'category', 'tag')

