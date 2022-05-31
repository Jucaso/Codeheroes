from .serializers import UsuarioSerializer
from .models import Usuario
from rest_framework import viewsets

# Create your views here.
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
   