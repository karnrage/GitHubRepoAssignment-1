from django.shortcuts import render, HttpResponse, redirect
from django.utils import timezone
from django.shortcuts import render

  # the index function is called when root is visited

def index(request):
    context = {
        'now' : timezone.now()
    }
    return render(request, "index.html", context)

# from django.shortcuts import render, HttpResponse, redirect
# from time import gmtime, strftime
# def index(request):
#   context = {
#   "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
#   }
#   return render(request,'appname/index.html', context)
