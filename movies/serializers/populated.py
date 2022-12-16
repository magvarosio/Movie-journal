from .common import MovieSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from genres.serializers.common import GenreSerializer


class PopulatedMovieSerializer(MovieSerializer):
  comments = PopulatedCommentSerializer(many=True)
  genre_ids = GenreSerializer(many=True)
  
  # popolo /genres/ con i movies
  
  # SELECT * FROM movies
  # JOIN comments ON movies.id = comments.movie_id;