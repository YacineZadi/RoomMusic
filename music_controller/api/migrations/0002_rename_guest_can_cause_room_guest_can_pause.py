# Generated by Django 4.2.6 on 2023-10-08 10:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='guest_can_cause',
            new_name='guest_can_pause',
        ),
    ]
