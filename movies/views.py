from .models import Movie
from .serializers.common import MovieSerializer
from .serializers.populated import PopulatedMovieSerializer



# APIView usa standard HTTP methods for function: GET, POST, PUT, DELETE
from rest_framework.views import APIView
#  sending back headers to the client, like the JSON method
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound 



# ! /movies
# ***** GET ALL MOVIES ****

class MovieListView(APIView):

  def get(self, _request):
    movies = Movie.objects.all()
    print("MOVIES!!! -> ", movies)
    serialized_movies = PopulatedMovieSerializer(movies, many=True)
    print(serialized_movies.data)
    return Response(serialized_movies.data, status.HTTP_200_OK)
  
  
  
# ! /movies/:pk (come dire :id)  
class MovieDetailView(APIView):
  

  # ***** CUSTOM FUNCTION (reusable) NOT a controller
    def get_movie(self, pk):
      try:
        return Movie.objects.get(pk=pk) #cerca nel movie-table una primary key che matchi la primary key della request di insomnia
      except Movie.DoesNotExist as e:
          print("STAMPO e -->",e) # lo leggo su insomnia! object created by the DoesNotExist class. 
          raise NotFound(str(e)) 
        # "e" is not serializable, so we convert to a string when sending back to the user
      except Exception as e:
          print(e)
          return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
    # ****** GET SINGLE MOVIE *****
    def get(self, _request, pk):
        movie = self.get_movie(pk) # uso la funzione creata sopra, per usarla -> self (che é tipo this.qualcosa)
        serialized_movie = PopulatedMovieSerializer(movie) # ritorna un single object back, dobbiamo serialize it (we don't need many = True)
        return Response(serialized_movie.data) # send back serialized data