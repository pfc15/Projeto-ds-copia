# Generated by Django 5.0.4 on 2024-05-30 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_cadastro', '0017_delete_cursos_unb'),
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