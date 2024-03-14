from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def home(request):
    data = {
        'name': 'John Doe',
        'age': 30,
        'email': 'john.doe@example.com'
    }
    return JsonResponse(data, status=200)


def order_per_day(request):
    data = {
        'count': 35
    }
    return JsonResponse(data, status=200)
