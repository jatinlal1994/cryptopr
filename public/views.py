from json import loads

from django.shortcuts import render
from django.http import JsonResponse

from .models import IcoRequest

from django.views.decorators.csrf import csrf_exempt

def public(request):
	return render(request, 'public/public.html', {})

def privacypolicy(request):
	return render(request, 'public/privacypolicy.html', {})

def tandc(request):
	return render(request, 'public/tandc.html', {})

def disclaimer(request):
	return render(request, 'public/disclaimer.html', {})

@csrf_exempt
def submitForm(request):
	jso = loads(request.body)
	form = IcoRequest(
		project_name = jso['project_name'],
		project_website = jso['project_website'],
		contact_name = jso['contact_name'],
		contact_email = jso['contact_email'],
		short_description = jso['short_description'],
		transaction_id = jso['transaction_id'],
		fields = jso['fields']
	)
	
	return JsonResponse({'status': True})