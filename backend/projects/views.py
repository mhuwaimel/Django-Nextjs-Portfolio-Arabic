from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.response import Response

from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *


class ProjectListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = None

class get_project(ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = (permissions.AllowAny,)
    # project_id = "id"

    def get_queryset(self):
        return Project.objects.filter(id=self.kwargs['project_id'])

