from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "user_id")