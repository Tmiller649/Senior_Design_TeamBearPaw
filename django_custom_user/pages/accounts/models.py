# accounts/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .manager import CustomUserManager

# iterable 
SUB_GOAL_CHOICES =( 
    ("FA", "Fat"), 
    ("SA", "Salt"), 
    ("SU", "Sugar"), 
)
PHYS_LVL_CHOICES =( 
    ("S", "Sedentary"), 
    ("LA", "Low Active"), 
    ("A", "Active"),
    ("VA", "Very Active") 
)  
WLP_CHOICES =( 
    ("G", "Gain"), 
    ("S", "Stay"), 
    ("L", "Lose"), 
)
GENDER_CHOICES = (
    ("M", "Male"),
    ("F", "Female"),
    ("N", "Non-Binary"),
    ("P", "Prefer not to choose")
) 

class CustomUser(AbstractUser):
    pass
    # add additional fields in here
    username = None
    email = models.EmailField(_("email address"), unique=True)
    weight = models.FloatField(_("weight"), help_text = "lbs")
    height = models.FloatField(_("height"), help_text = "in")
    age = models.IntegerField(_("age"))
    gender = models.CharField(max_length=1, choices = GENDER_CHOICES, default= "P")
    physical_activity_level = models.CharField(max_length=100, choices=PHYS_LVL_CHOICES, default = "N/A")
    track_fat = models.BooleanField(default = False, help_text = "Sub goal #1")
    track_salt = models.BooleanField(default = False, help_text = "Sub goal #2")
    track_sugar = models.BooleanField(default = False, help_text = "Sub goal #3")
    weight_goal = models.CharField(max_length=4, choices=WLP_CHOICES, default = "L")
    id = models.AutoField(primary_key=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "id"]

    objects = CustomUserManager()

    def __str__(self):
        return self.email