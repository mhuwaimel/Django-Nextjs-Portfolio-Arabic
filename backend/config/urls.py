from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/about/', include('about.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/technologies/', include('technologies.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/experience/', include('experience.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
