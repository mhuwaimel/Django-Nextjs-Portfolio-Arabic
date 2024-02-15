from django.db import models
import os
import random


# Create your models here.
def projects_picture_path(instance, filename):
    fileName = str(instance.project.name).strip()
    fileName = filename.replace(" ", "-")
    _, extension = os.path.splitext(filename)
    return f"project/project-{fileName}{extension}"

def mainImageProject_picture_path(instance, filename):
    fileName = str(instance.name).strip()
    fileName = filename.replace(" ", "-")
    _, extension = os.path.splitext(filename)
    return f"project/mainImage-{fileName}{extension}"

class Tag(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=400)
    link = models.URLField(max_length=250)
    project_date = models.CharField(max_length=14)
    tags = models.ManyToManyField(Tag)
    main_image=models.ImageField(upload_to=mainImageProject_picture_path, null=True, blank=True, verbose_name='الصورة الرئيسية للمشروع')
    def __str__(self):
        return self.name

class ProjectsGallery(models.Model):
    image = models.ImageField(upload_to=projects_picture_path, null=True, blank=True, verbose_name='صور')
    # project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='المشروع ')
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name='project_images')
    alt_text = models.CharField(max_length=255, blank=True, null=True)
    class Meta:
        verbose_name = 'صور المشاريع'
        verbose_name_plural = 'صور المشاريع'

    def __str__(self):
        return self.project.name