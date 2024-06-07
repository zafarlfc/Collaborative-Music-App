from django.shortcuts import render

from .models import Room
# Create your views here.

def home(request):
    return "<h2>My Music App</h2>"
