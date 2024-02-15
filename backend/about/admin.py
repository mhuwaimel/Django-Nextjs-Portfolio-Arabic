from django.contrib import admin
from .models import *


class AboutAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'hero_image')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'hero_image')
    list_per_page = 20


admin.site.register(About, AboutAdmin)

class SocialAccountsAdmin(admin.ModelAdmin):
    list_display = ('id', 'social_url')
    list_display_links = ('id', 'social_url')


admin.site.register(SocialAccounts, SocialAccountsAdmin)

class SkillsAdmin(admin.ModelAdmin):
    list_display = ('id', 'skill_name')


admin.site.register(Skills, SkillsAdmin)