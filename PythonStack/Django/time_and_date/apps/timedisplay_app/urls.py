from django.conf.urls import url
from django.contrib import admin
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^time_display$', views.index)
]