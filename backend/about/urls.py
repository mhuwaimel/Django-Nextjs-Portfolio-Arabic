from django.urls import path

from . import views
from .views import *

urlpatterns = [
    path('', AboutListView.as_view()),
    path('social/',SocialAccountsListView.as_view() )
]
