# Generated by Django 2.1.5 on 2019-02-12 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=300)),
                ('email', models.CharField(max_length=300)),
                ('telegram_id', models.CharField(max_length=300)),
                ('project', models.CharField(max_length=300)),
                ('white_paper', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='IcoRequest',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('session_id', models.CharField(max_length=300)),
                ('project_name', models.CharField(blank=True, max_length=300)),
                ('project_website', models.CharField(blank=True, max_length=300)),
                ('contact_name', models.CharField(blank=True, max_length=300)),
                ('contact_email', models.CharField(blank=True, max_length=300)),
                ('short_description', models.CharField(blank=True, max_length=2048)),
                ('fields', models.CharField(blank=True, max_length=1000)),
                ('transaction_id', models.CharField(blank=True, max_length=300)),
            ],
        ),
    ]
