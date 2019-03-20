from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from public.models import PackageOrder

import hashlib
import hmac
import json
import requests

API_URL = 'https://api.changelly.com'
API_KEY = 'place_your_api_key_here'
API_SECRET = 'place_your_api_secret_here'

def bitcoinTransaction(request):
	"""message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'createTransaction',
	    'params': [
			"from": "btc",
			"to": "eth",
			"address": "0x7910943abaef5cf521d5793708b7b558f6ace258",
			"extraId": null,
			"amount": 1
		]
	}

	serialized_data = json.dumps(message)
	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()
	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)"""

	return response.json()

def ethereumTransaction(request):
	"""API_URL = 'https://api.changelly.com'
	API_KEY = 'place_your_api_key_here'
	API_SECRET = 'place_your_api_secret_here'

	message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'createTransaction',
	    'params': [
			"from": "eth",
			"to": "btc",
			"address": "18ufvR1ga4ousSTwhwQi7W6UpvqvzLuRgf",
			"extraId": null,
			"amount": 1
		]
	}

	serialized_data = json.dumps(message)

	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()

	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)"""

	return response.json()

@csrf_exempt
def packageOrder(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		print(data)
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
			youtube = data['youtube']
		)

		order.save()

		return JsonResponse({
			"status": True,
			"project_name": data['project_name'],
			"telegram_contact": data['telegram_contact']
		})