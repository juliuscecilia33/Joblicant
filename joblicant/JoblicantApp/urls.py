from django.conf.urls import url
from JoblicantApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^application/$',views.applicationApi),
    url(r'^application/([0-9]+)$',views.applicationApi),

     url(r'^common/$',views.commonInformationApi),
    url(r'^commmon/([0-9]+)$',views.commonInformationApi),

    url(r'^SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)