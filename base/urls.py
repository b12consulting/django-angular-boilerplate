from django.urls import path, include
from base import views
from .viewsets import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('rest/', include(router.urls)),
]
