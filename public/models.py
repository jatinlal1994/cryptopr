from django.db import models

class Contact(models.Model):
	id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 300)
	email = models.CharField(max_length = 300)
	telegram_id = models.CharField(max_length = 300)
	project = models.CharField(max_length = 300)
	white_paper = models.CharField(max_length = 500)

	def __str__(self):
		return self.name+" : "+self.email+" : "+self.telegram_id

class IcoRequest(models.Model):
	id = models.AutoField(primary_key = True)
	session_id = models.CharField(max_length = 300)

	project_name = models.CharField(max_length = 300, blank = True)
	project_website = models.CharField(max_length = 300, blank = True)
	contact_name = models.CharField(max_length = 300, blank = True)
	contact_email = models.CharField(max_length = 300, blank = True)
	short_description = models.CharField(max_length = 2048, blank = True)
	fields = models.CharField(max_length = 1000, blank = True)
	transaction_id = models.CharField(max_length = 300, blank = True)

	def __str__(self):
		return str(self.session_id)