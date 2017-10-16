from django.conf.urls import url
from django.contrib import admin
from . import views           # This line is new!

urlpatterns = [
    url(r'^$', views.index),
    url(r'^generate$', views.generate),
    url(r'^reset$', views.reset)
]