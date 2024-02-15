from rest_framework import serializers
from .models import *


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


class SocialAccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccounts
        fields = '__all__'


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'
