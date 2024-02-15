from rest_framework import serializers
from .models import Project, Tag, ProjectsGallery


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)


class ProjectsGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectsGallery
        fields = ('image', 'alt_text', 'project')


class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    delayAnimation = serializers.SerializerMethodField('getDelayAnimation')

    def getDelayAnimation(self, project):
        return 200

    project_images = ProjectsGallerySerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = (
        'id', 'name', 'description', 'link', 'project_date', 'main_image', 'tags', 'project_images', 'delayAnimation')
