# Generated by Django 5.0.4 on 2024-05-13 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materias', '0002_materia_carga_horaria'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='materia',
            name='carga_horaria',
        ),
        migrations.AddField(
            model_name='turma',
            name='local',
            field=models.CharField(default='NA', max_length=30),
        ),
        migrations.AddField(
            model_name='turma',
            name='turno',
            field=models.CharField(default='NA', max_length=30),
        ),
        migrations.AlterField(
            model_name='materia',
            name='codigo',
            field=models.CharField(max_length=15, primary_key=True, serialize=False),
        ),
    ]
