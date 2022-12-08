from django.db import models

# Create your models here.
class Comment(models.Model):
    text = models.TextField(max_length=300)  
    created_at = models.DateTimeField(auto_now_add=True)
    movie = models.ForeignKey(
        'movies.Movie',  # appname.nameoftheModel`
        related_name='comments', 
        on_delete=models.CASCADE # se voglio mettere l'opzione di cancellare un film, cancella anche i commenti
    )