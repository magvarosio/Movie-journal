from .models import Movie
from .serializers.common import MovieSerializer


# APIView usa standard HTTP methods for function: GET, POST, PUT, DELETE, ..(external API, asynch response )
from rest_framework.views import APIView
#  sending back headers to the client, like the JSON method
from rest_framework.response import Response
from rest_framework import status


# ***** GET ALL MOVIES ****

class MovieListView(APIView):

  def get(self, _request):
    movies = Movie.objects.all()
    print("MOVIES!!! -> ", movies)
    serialized_movies = MovieSerializer(movies, many=True)
    print(serialized_movies.data)
    
    return Response(serialized_movies.data, status.HTTP_200_OK)