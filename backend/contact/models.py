from django.db import models


class Contact(models.Model):
    mobile = models.CharField(max_length=250)
    email = models.CharField(max_length=150)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contact'

    def __str__(self):
        return self.email
