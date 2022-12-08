from django.db import models

# Create your models here.


class Movie(models.Model):
    title = models.CharField(max_length=100)
    director = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
  #  add genre

    def __str__(self):
        return f"{self.title} {self.director} {self.year}" # add genre


