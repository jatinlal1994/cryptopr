from django.contrib import admin
from django.urls import path

from public import views as public

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', public.public, name='home'),
    path('privacy-policy', public.privacypolicy, name='privacy-policy'),
    path('terms-and-conditions', public.tandc, name='tandc'),
    path('disclaimer', public.disclaimer, name='disclaimer'),
    path('submit-form', public.submitForm, name="submit-form"),
]
