# Generated by Django 5.0.4 on 2024-05-13 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_cadastro', '0003_alter_cadastro_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cadastro',
            name='email',
            field=models.EmailField(max_length=22, primary_key=True, serialize=False, unique=True),
        ),
    ]