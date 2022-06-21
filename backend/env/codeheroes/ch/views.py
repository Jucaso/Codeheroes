from .serializers import UsuarioSerializer, ItemsSerializer, UserSerializer
from .models import Usuario, Items
from rest_framework import viewsets
from django.contrib.auth.models import User

# Create your views here.
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
   