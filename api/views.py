from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from random import randint
from public.models import PackageOrder
from django.core.mail import send_mail
import hashlib
import hmac
import json
import requests

API_URL = 'https://api.changelly.com'
API_KEY = '517fdd5a58da4513aec1dec94983b498'
API_SECRET = 'd5b9f942ce6b864c117193c6f7d5e02632392602f7467ae11d9dcaa18984b8c8'

@csrf_exempt
def bitcoinTransaction(request):
	message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'createTransaction',
	    'params': {
	    	"from": "btc",
			"to": "eth",
			"address": "0x7910943abaef5cf521d5793708b7b558f6ace258",
			"extraId": None,
			"amount": 1
	    }
	}

	serialized_data = json.dumps(message)

	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()

	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)

	return JsonResponse(response.json())

@csrf_exempt
def ethereumTransaction(request):
	message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'getExchangeAmount',
	    'params': {
	    	"from": "eth",
			"to": "btc",
			"amount": "1"
	    }
	}

	serialized_data = json.dumps(message)

	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()

	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)

	data = response.json()
	value = float(data['result'])

	message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'createTransaction',
	    'params': {
	    	"from": "eth",
			"to": "btc",
			"address": "18ufvR1ga4ousSTwhwQi7W6UpvqvzLuRgf",
			"extraId": None,
			"amount": 1 / value
	    }
	}

	serialized_data = json.dumps(message)

	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()

	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)

	return JsonResponse(response.json())

# ETH Address : 18ufvR1ga4ousSTwhwQi7W6UpvqvzLuRgf

@csrf_exempt
def packageOrder(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		print(data)

		reference = randint(1000000000, 9999999999)
		order = PackageOrder(
			project_name = data['project_name'],
			token_symbol = data['token_symbol'],
			website = data['website'],
			telegram_contact = data['telegram_contact'],
			facebook = data['facebook'],
			twitter = data['twitter'],
			telegram = data['telegram'],
			linkedin = data['linkedin'],
			reddit = data['reddit'],
			youtube = data['youtube'],
			reference = reference
		)

		order.save()

		send_mail(
			'Your details has been succesfully saved',
			'Your details have been succesfully saved. You can continue with payment on our website. The delivery of the services will start within 12 hours of the completion of payment.',
			'admin@cryptopr.us',
			['jatinlal1994@gmail.com'],
			fail_silently=False,
		)

		return JsonResponse({
			"status": True,
			"project_name": data['project_name'],
			"telegram_contact": data['telegram_contact'],
			"reference": reference
		})