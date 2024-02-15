from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.response import Response
from .models import *
from .serialzers import *


class ExperienceListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Experience.objects.all().order_by('-id')
    serializer_class = ExperienceSerializer
    pagination_class = None
