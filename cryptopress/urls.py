from django.contrib import admin
from django.urls import path

from public import views as public

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', public.public),
    path('privacy-policy', public.privacypolicy, name='privacy-policy'),
    path('terms-and-conditions', public.tandc, name='tandc'),
    path('disclaimer', public.disclaimer, name='disclaimer'),
]
