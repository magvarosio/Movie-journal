from django.db import models

# Create your models here.


class Movie(models.Model):
  
    adult = models.BooleanField(default=False)
    backdrop_path = models.CharField(max_length=5000, null=True,blank=True, default=None) 
    genre_ids = models.ManyToManyField(
        'genres.Genre',
        related_name='movies'
    )
    
    original_language = models.CharField(max_length=5000)
    original_title = models.CharField(max_length=5000)
    overview = models.CharField(max_length=5000)
    popularity = models.FloatField()
    poster_path = models.CharField(max_length=5000, null=True,blank=True, default=None)
    release_date = models.CharField(max_length=5000)
    title = models.CharField(max_length=100)
    video = models.BooleanField(default=False)
    vote_average = models.FloatField()
    vote_count = models.PositiveBigIntegerField()
    
    def __str__(self):
        return f"{self.title} {self.genre_ids} {self.vote_average}" # add genre