from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Usuario(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    estrellas = models.IntegerField(default=0)
    puntaje = models.IntegerField(default=0)
    itemsIds = models.CharField(default="", max_length=10)
    itemActivo = models.CharField(default="", max_length=10)
    nivel_1 = models.CharField(default="", max_length=10) #Se define un nivel por sus estrellas y puntaje así: "estrellas, puntaje" -> "3, 100"
    nivel_2 = models.CharField(default="", max_length=10)
    nivel_3 = models.CharField(default="", max_length=10)
    nivel_4 = models.CharField(default="", max_length=10)

    def __str__(self):
        return str(self.user)

class Items(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    imagen = models.CharField(max_length=100)
    def __str__(self):
        return str(self.nombre)
