from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Todo(models.Model):
    description = models.TextField()
