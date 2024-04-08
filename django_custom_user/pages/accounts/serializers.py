from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "id","get_eer", "get_nutrition", "get_recommend")

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super(MyTokenObtainPairSerializer, self).validate(attrs)

        data['email'] = self.user.email
        data['id']= self.user.id

        return data

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "id", "password")
    
    def create(self, validated_data):
        account = CustomUser.objects.create(
            email=validated_data['email'],
            weight=validated_data['weight'],
            height=validated_data['height'],
            age=validated_data['age'],
            gender=validated_data['gender'],
            physical_activity_level=validated_data['physical_activity_level'],
            track_fat=validated_data['track_fat'],
            track_salt=validated_data['track_salt'],
            track_sugar=validated_data['track_sugar'],
            weight_goal=validated_data['weight_goal'],
        )

        account.set_password(validated_data['password'])
        account.save()
        return account