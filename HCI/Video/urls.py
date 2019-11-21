from django.urls import path
from django.conf.urls import url
from . import views,findclip

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^dataProcess$', findclip.findclip)
]