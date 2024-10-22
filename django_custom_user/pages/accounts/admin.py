# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

    list_display = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "id", "daily_cal", "daily_cff", "daily_carb", "daily_sug", "daily_sod", "daily_pro")
    list_filter = ("email", "weight", "height", "age", "gender", "physical_activity_level", "track_fat", "track_salt", "track_sugar", "weight_goal", "id", "daily_cal", "daily_cff", "daily_carb", "daily_sug", "daily_sod", "daily_pro")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "password1", "password2", "is_staff",
                "is_active", "groups", "user_permissions"
            )}
        ),
    )
    
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)