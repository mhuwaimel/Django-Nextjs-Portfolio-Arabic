from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *


class AboutListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    pagination_class = None


class SocialAccountsListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = SocialAccounts.objects.all()
    serializer_class = SocialAccountsSerializer
    pagination_class = None


@api_view(['GET'])
def index(request):
     snippets = About.objects.all()
     serializer = AboutSerializer(snippets, many=True)
     return Response(serializer.data)

