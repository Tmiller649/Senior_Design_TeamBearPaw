# accounts/urls.py
from django.urls import path, re_path
from django.contrib import admin
from django.urls import path, include

from .views import SignUpView, signUp

urlpatterns = [
    #path("signup/", signUp, name="signup"),
]