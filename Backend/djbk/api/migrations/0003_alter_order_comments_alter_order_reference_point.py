# Generated by Django 5.0.2 on 2024-04-20 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_order_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='comments',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='reference_point',
            field=models.TextField(blank=True, null=True),
        ),
    ]
