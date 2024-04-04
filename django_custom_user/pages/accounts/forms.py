# accounts/forms.py
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.db import models
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal",)

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal",)