from django.urls import path
from .views import MovieListView, MovieDetailView, MovieSearchView, MovieGenreView


urlpatterns = [
    path('', MovieListView.as_view()),  # Endpoint: /movies/
    path('<int:pk>/', MovieDetailView.as_view()),
    path('<str:query>/', MovieSearchView.as_view()),
    path('genre/<int:genre>/', MovieGenreView.as_view())
]
