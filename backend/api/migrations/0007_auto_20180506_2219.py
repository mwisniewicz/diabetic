# Generated by Django 2.0.4 on 2018-05-06 22:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_usermanager'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='carbs',
        ),
        migrations.RemoveField(
            model_name='product',
            name='fats',
        ),
        migrations.RemoveField(
            model_name='product',
            name='glycemic_index',
        ),
        migrations.RemoveField(
            model_name='product',
            name='proteins',
        ),
        migrations.RemoveField(
            model_name='product',
            name='weight',
        ),
    ]
