# Generated by Django 5.0.4 on 2024-06-24 21:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_cadastro', '0025_alter_username_trocado_dia_trocado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='username_trocado',
            name='dia_trocado',
        ),
    ]