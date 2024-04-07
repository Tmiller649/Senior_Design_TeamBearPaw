# accounts/views.py
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.http import JsonResponse

from .forms import CustomUserCreationForm

from rest_framework import viewsets
from rest_framework.decorators import action
from .serializers import CustomUserSerializer
from .models import CustomUser

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

class CustomUserView(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    @action(detail=True, methods=['Get'])
    def singleUserView(self, request, id):
        queryset = CustomUser.objects.get(pk=id)
        serializer = CustomUserSerializer
        return JsonResponse({'user': serializer.data})
