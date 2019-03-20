from django.contrib import admin
from django.urls import path

from public import views as public
<<<<<<< HEAD
test
=======
from api import views as api

>>>>>>> 4f0c194cd1b57ca03539a44d86f10414add2c4ee
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', public.public, name='home'),
    path('privacy-policy', public.privacypolicy, name='privacy-policy'),
    path('terms-and-conditions', public.tandc, name='tandc'),
    path('disclaimer', public.disclaimer, name='disclaimer'),
    path('submit-form', public.submitForm, name="submit-form"),

    path('contact-request', public.contactRequest, name='contact-request'),
    path('package-request', api.packageOrder),
]
