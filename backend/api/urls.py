from django.conf.urls import url, include
from rest_framework import routers
from api import views
from api.views import CustomObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^authenticate/', CustomObtainAuthToken.as_view()),
]
