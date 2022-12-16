from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model, password_validation, hashers
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(ModelSerializer):
  
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)
    
    # **** Validate method
    
    def validate(self, data):
      print('data->', data)
      
      # pop method rimuove la psw key dal data object, la salva in una variabile e la aggiunge dopo hashed
      password = data.pop('password')
      password_confirmation = data.pop('password_confirmation')
      
      # check se la psw matcha
      if password != password_confirmation:
        raise ValidationError({
          'password_confirmation': 'Does not match the password field'
        })
        
        # Validating the password
      password_validation.validate_password(password)
      
      # hash the psw e put it back nel data object 
      data['password'] = hashers.make_password(password)
      
      return data #validate method requires you to return back user data 
    
    class Meta:
      model = User
      fields = ('id', 'email', 'username', 'profile_image', 'password', 'password_confirmation')