from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('Video/', include('Video.urls')),
    path('admin/', admin.site.urls),
]
