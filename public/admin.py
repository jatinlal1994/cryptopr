from django.contrib import admin

from .models import Contact, IcoRequest, PackageOrder

admin.site.register(Contact)
admin.site.register(IcoRequest)
admin.site.register(PackageOrder)