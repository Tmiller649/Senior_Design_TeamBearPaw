# accounts/views.py
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import CustomUserSerializer
from .models import CustomUser
from .forms import CustomUserCreationForm

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

class CustomUserView(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated,]
    
    @api_view(['GET', 'POST', 'DELETE'])
    @action(detail=True, methods=['Get'])
    def singleUserView(self, request, id):
        try:
            queryset = CustomUser.objects.get(pk=id)
        except CustomUser.DoesNotExist:
            Response(status=status.HTTP_404_NOT_FOUND)
        if request.method == 'GET':
            serializer_class = CustomUserSerializer
            return Response({'user': serializer_class.data})
        elif request.method == 'DELETE':
            queryset.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif request.method == 'POST':
            serializer_class = CustomUserSerializer(queryset, data=request.data)
            if serializer_class.is_valid():
                serializer_class.save()
                return Response({'user': serializer_class.data})
            return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

