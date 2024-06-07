from django.shortcuts import render, HttpResponse
from rest_framework import generics

from .models import Room
from .serializers import RoomSerializer
# Create your views here.

def home(request):
    return HttpResponse("<h2>My Music App</h2>")

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
