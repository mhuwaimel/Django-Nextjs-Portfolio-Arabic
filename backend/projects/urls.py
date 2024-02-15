from django.urls import path
from .views import *
from . import views
urlpatterns = [
    path('', ProjectListView.as_view()),

    path('<int:project_id>/',get_project.as_view())
]
