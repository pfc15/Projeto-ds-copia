# Generated by Django 5.0.4 on 2024-06-05 22:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materias', '0015_atividade_resumo_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentario',
            name='ativo',
            field=models.BooleanField(default=False),
        ),
    ]