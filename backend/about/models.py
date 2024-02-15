from django.db import models
import os
from technologies.validators import validate_file_extension

def hero_picture_path(instance, filename):
    fileName = str(instance.title).strip()
    fileName = filename.replace(" ", "-")
    _, extension = os.path.splitext(filename)
    return f"hero/hero{fileName}"

class About(models.Model):
    title = models.CharField(max_length=50,verbose_name='العنوان الرئيسي')
    description = models.CharField(max_length=360,verbose_name='العنوان تحت الرئيسي')
    second_decription=models.CharField(max_length=100,null=True,blank=True,verbose_name='مقدمة تعريفية' )
    hero_image = models.ImageField(upload_to=hero_picture_path, null=True, blank=True, verbose_name='الصورة الشخصية')

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'عــني'

    def __str__(self):
        return self.title

class SocialAccounts(models.Model):
    social_platform = models.CharField(max_length=50,verbose_name='نوع منصة التواصل',null=True,blank=True)
    social_url = models.URLField(max_length=250,verbose_name='رابط حسابك على هذه المنصة')
    icon_name=models.CharField(max_length=50,verbose_name='platform css in bootstrap',null=True,blank=True)
    class Meta:
        verbose_name = 'Social Accounts'
        verbose_name_plural = 'حسابات التواصل'

    def __str__(self):
        return self.social_platform

class Skills(models.Model):
      skill_name = models.CharField(max_length=70,verbose_name='اسم المهارة')
      skill_icon = models.FileField(upload_to='icons', validators=[validate_file_extension], verbose_name='ايقونة المهارة svg')

      class Meta:
          verbose_name = 'المهارات'
          verbose_name_plural = 'مهاراتي'


      def __str__(self):
          return self.skill_name