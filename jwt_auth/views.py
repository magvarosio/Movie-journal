from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model

from .serializers.common import UserSerializer

from datetime import datetime, timedelta
import jwt

from django.conf import settings # secr key




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


class LoginView(APIView):
  
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist as e:
            print(e)
            raise PermissionDenied('Invalid Credentials')

        if not user_to_login.check_password(password):
            print('PASSWORD INCORRECT')
            raise PermissionDenied('Invalid Credentials')

        dt = datetime.now() + timedelta(days=7)
        dt_as_seconds = int(dt.strftime('%s')) # %s seconds
        
        # token -> sub, exp, secret key
        token = jwt.encode(
            { 'sub': user_to_login.id, 'exp': dt_as_seconds },
            settings.SECRET_KEY,
            'HS256'
        )
        print(token)
        
        return Response({
            'token': token,
            'message': f'Welcome back, {user_to_login.username}!'
        }, status.HTTP_202_ACCEPTED)