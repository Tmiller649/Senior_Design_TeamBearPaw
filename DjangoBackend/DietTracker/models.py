from django.db import models

# Create your models here.
# Health class, should take these info from a database
class Health(models.Model):
    age = models.IntegerField(null=False, default = 0)