# Generated by Django 3.1.6 on 2021-03-27 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backened', '0009_location'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('First_name', models.CharField(max_length=120)),
                ('Last_name', models.CharField(max_length=120)),
                ('Email_name', models.CharField(max_length=120)),
                ('Message', models.TextField(blank=True)),
            ],
        ),
    ]
