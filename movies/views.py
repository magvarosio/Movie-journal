from .models import Movie
from .serializers.common import MovieSerializer
from .serializers.populated import PopulatedMovieSerializer


# APIView usa standard HTTP methods for function: GET, POST, PUT, DELETE
from rest_framework.views import APIView
#  sending back headers to the client, like the JSON method
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# ! /movies

class MovieListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # ***** GET ALL MOVIES ****

    def get(self, _request):
        movies = Movie.objects.all()
        # print("MOVIES!!! -> ", movies)
        serialized_movies = PopulatedMovieSerializer(movies, many=True)
        # print(serialized_movies.data)
        return Response(serialized_movies.data, status.HTTP_200_OK)


# ! /movies/:pk (come dire :id)
class MovieDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # ***** CUSTOM FUNCTION (reusable -> add feauture addMovie/editMovie)

    def get_movie(self, pk):
        try:
            # cerca nel movie-table una primary key che matchi la primary key della request di insomnia
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist as e:
            # lo leggo su insomnia! object created by the DoesNotExist class.
            print("STAMPO e -->", e)
            raise NotFound(str(e))
            # "e" is not serializable, so we convert to a string when sending back to the user
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

    # ****** GET SINGLE MOVIE *****

    def get(self, _request, pk):
        # uso la funzione creata sopra, per usarla -> self (che é tipo this.qualcosa)
        movie = self.get_movie(pk)
        # ritorna un single object back, dobbiamo serialize it (we don't need many = True)
        serialized_movie = PopulatedMovieSerializer(movie)
        return Response(serialized_movie.data)  # send back serialized data
