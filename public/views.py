from json import loads

from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages

from .models import IcoRequest, Contact
from django.shortcuts import redirect

from django.views.decorators.csrf import csrf_exempt

def public(request):
	return render(request, 'public/public.html', {})

def privacypolicy(request):
	return render(request, 'public/privacypolicy.html', {})

def tandc(request):
	return render(request, 'public/tandc.html', {})

def disclaimer(request):
	return render(request, 'public/disclaimer.html', {})

def contactRequest(request):
	if request.method == 'POST':
		name = request.POST.get('name')
		email = request.POST.get('email')
		telegram = request.POST.get('telegram-id')
		project_name = request.POST.get('project-name')
		white_paper_link = request.POST.get('white-paper')
		contact = Contact(
			name = name,
			email = email,
			telegram_id = telegram,
			project = project_name,
			white_paper = white_paper_link
		)
		messages.success(request, 'Your password was updated successfully!')
		contact.save()
	return redirect('/')

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