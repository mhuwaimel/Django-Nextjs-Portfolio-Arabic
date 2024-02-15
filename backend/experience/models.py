from django.db import models
import os
import random

# Create your models here.

def experience_picture_path(instance, filename):
    _, extension = os.path.splitext(filename)
    fileName = str(instance.position).strip()
    fileName = filename.replace(" ", "-")
    return f"experience/experience-{fileName}{extension}"


class Experience(models.Model):
     position=models.CharField(max_length=150)
     description = models.CharField(max_length=300)
     start_date=models.CharField(max_length=12)
     end_date=models.CharField(max_length=12)
     work_place=models.CharField(max_length=80,null=True,blank=True)
     location=models.CharField(max_length=100,null=True,blank=True)
     image = models.ImageField(upload_to=experience_picture_path, null=True, blank=True, verbose_name='صور')

     def __str__(self):
         return self.position