from django.http import HttpResponse
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.decorators import api_view
from .models import Contact
from .serializers import ContactSerializer
from django.conf import settings
from django.core.mail import send_mail
from django.conf import settings


class ContactListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    pagination_class = None


@api_view(['POST'])
def send_test_email(request):
    subject = 'Thank you for registering to our site'
    message = ' it  means a world to us '
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['alhuwaimel@gmail.com', ]
    response=send_mail(subject, message, email_from, recipient_list)
    if response.status_code==200:
        return HttpResponse('Email sent successfully!')
    else:
        return HttpResponse('Email Not Send!')
    # message = Mail(
    #     from_email='from_email@example.com',
    #     to_emails='alhuwaimel.m@gmail.com',
    #     subject='Sending with Twilio SendGrid is Fun',
    #     html_content='<strong>and easy to do anywhere, even with Python</strong>')
    #
    # sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
    # response = sg.send(message)
    # if response.status_code == 200:
    #     return HttpResponse('Email sent successfully!')
    # else:
    #     return HttpResponse('NotSend!')

