# Generated by Django 5.0.4 on 2024-05-30 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_cadastro', '0013_cadastro_name_alter_cadastro_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cursos_unb',
            fields=[
                ('curso', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('pessoas', models.IntegerField(default=0)),
            ],
        ),
    ]