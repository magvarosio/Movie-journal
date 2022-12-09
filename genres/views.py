from django.shortcuts import render
from .models import Genre
from .serializers.populated import PopulatedGenreSerializer


from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.exceptions import NotFound


#  ********** GET ALL THE GENRE **********

class GenreListView(APIView):

    def get(self, _request):
        genres = Genre.objects.all()
        serialized_genres = PopulatedGenreSerializer(genres, many=True)
        return Response(serialized_genres.data, status.HTTP_200_OK)


# **** GET ONE GENRE ****** 

# /genre/:pk
class GenreDetailView(APIView):

    def get(self, _request, pk):
        try:
            genre = Genre.objects.get(pk=pk)
            serialized_genre = PopulatedGenreSerializer(genre)
            return Response(serialized_genre.data)
        except Genre.DoesNotExist as e:
            print(e)
            raise NotFound(str(e))

