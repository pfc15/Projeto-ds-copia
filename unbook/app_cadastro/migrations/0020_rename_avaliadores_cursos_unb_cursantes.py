# Generated by Django 5.0.4 on 2024-06-01 01:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_cadastro', '0019_remove_cursos_unb_pessoas_cursos_unb_avaliadores'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cursos_unb',
            old_name='avaliadores',
            new_name='cursantes',
        ),
    ]