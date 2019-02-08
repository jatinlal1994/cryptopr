from django.shortcuts import render

def public(request):
	return render(request, 'public/public.html', {})

def privacypolicy(request):
	return render(request, 'public/privacypolicy.html', {})

def tandc(request):
	return render(request, 'public/tandc.html', {})

def disclaimer(request):
	return render(request, 'public/disclaimer.html', {})