# Generated by Django 3.2.4 on 2021-08-19 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JoblicantApp', '0004_auto_20210705_1226'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='Notes',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]