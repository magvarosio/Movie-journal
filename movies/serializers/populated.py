from .common import MovieSerializer
from comments.serializers.common import CommentSerializer


class PopulatedMovieSerializer(MovieSerializer):
  comments = CommentSerializer(many=True)
  
  # popolo /genres/ con i movies
  
  # SELECT * FROM movies
  # JOIN comments ON movies.id = comments.movie_id;