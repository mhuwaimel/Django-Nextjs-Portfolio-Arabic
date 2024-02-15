from django.contrib import admin
from .models import Project, Tag, ProjectsGallery



class ProductImageInline(admin.TabularInline):
    model = ProjectsGallery
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'tags')
    list_per_page = 20
    inlines = [ProductImageInline]


admin.site.register(Project, ProjectAdmin)
admin.site.register(Tag)
admin.site.register(ProjectsGallery)

