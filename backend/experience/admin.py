from django.contrib import admin
from .models import Experience
# Register your models here.

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('position', 'start_date')
    # list_display_links = ('position')

admin.site.register(Experience, ExperienceAdmin)