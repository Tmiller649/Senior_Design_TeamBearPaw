# Generated by Django 4.2.11 on 2024-04-07 07:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('weight', models.FloatField(help_text='lbs', verbose_name='weight')),
                ('height', models.FloatField(help_text='in', verbose_name='height')),
                ('age', models.IntegerField(verbose_name='age')),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('N', 'Non-Binary'), ('P', 'Prefer not to choose')], default='P', max_length=1)),
                ('physical_activity_level', models.CharField(choices=[('S', 'Sedentary'), ('LA', 'Low Active'), ('A', 'Active'), ('VA', 'Very Active')], default='N/A', max_length=100)),
                ('track_fat', models.BooleanField(default=False, help_text='Sub goal #1')),
                ('track_salt', models.BooleanField(default=False, help_text='Sub goal #2')),
                ('track_sugar', models.BooleanField(default=False, help_text='Sub goal #3')),
                ('weight_goal', models.CharField(choices=[('G', 'Gain'), ('S', 'Stay'), ('L', 'Lose')], default='L', max_length=4)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
    ]
