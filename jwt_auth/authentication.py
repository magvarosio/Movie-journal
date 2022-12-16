from rest_framework.authentication import BaseAuthentication 
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model


User = get_user_model()


from django.conf import settings
import jwt



#extend BaseAuthentication and override the authenticate method

class JWTAuthentication(BaseAuthentication): 
  
    def authenticate(self, request):
      print('REQUEST HEADERS -> ', request.headers)
      
        # 1. headers?
      if not request.headers:
          print('NO HEADERS')
          return None 
      
      # 2. Authorization header present
      headers = request.headers.get('Authorization')
      if not headers:
            print('AUTHORIZATION HEADER NOT PRESENT')
            return None
          
      # 3. Bearer token ?
      if not headers.startswith('Bearer '):
        print('INVALID TOKEN FORMAT')
        raise PermissionDenied('Invalid Token')
      
      # 4. Remove Bearer
      token = headers.replace('Bearer ', '')
      print('TOKEN ->', token)
      
      
      # 5. JWT method - per verificare che il token sia valido e estrarre il payload nel processo
      
      try:
        print(settings.SECRET_KEY)
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        
        # 6. Using the sub on the payload (user id), cerchiamo un match con la User table
        user = User.objects.get(pk=payload['sub'])
        print(user)
      except User.DoesNotExist as e:
        raise PermissionDenied('User not found')  
      except Exception as e:
          print(e)
          raise PermissionDenied(str(e))
        
        
        # 7. return a two-tuple containing the user object we found in the database and the token (used to verify them)
      return (user, token)
    
      