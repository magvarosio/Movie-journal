from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model

from .serializers.common import UserSerializer

# Create your views here.

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        try:
            # taking the user data and validating it
            user_to_register = UserSerializer(data=request.data)
            if user_to_register.is_valid():
                user_to_register.save()
                return Response('Registration successful', status.HTTP_201_CREATED)
            return Response(user_to_register.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)