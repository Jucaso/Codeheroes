from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Usuario(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    estrellas = models.IntegerField(default=0)
    puntaje = models.IntegerField(default=0)
    nivel_1 = models.CharField(default="", max_length=10) #Se define un nivel por sus estrellas y puntaje así: "estrellas, puntaje" -> "3, 100"
    nivel_2 = models.CharField(default="", max_length=10)
    nivel_3 = models.CharField(default="", max_length=10)
    nivel_4 = models.CharField(default="", max_length=10)

    def __str__(self):
        return self.user
