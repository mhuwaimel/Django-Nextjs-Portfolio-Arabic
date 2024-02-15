from django.urls import path
from contact import views

urlpatterns = [
    path('', views.ContactListView.as_view()),
    path('sendemail/', views.send_test_email, name='send_test_email')
]
