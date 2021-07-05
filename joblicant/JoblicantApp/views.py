from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from JoblicantApp.models import Application,CommonInformation
from JoblicantApp.serializers import ApplicationSerializer,CommonInformationSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def applicationApi(request,id=0):
    if request.method=='GET':
        applications = Application.objects.all()
        applications_serializer = ApplicationSerializer(applications, many=True)
        return JsonResponse(applications_serializer.data, safe=False)

    elif request.method=='POST':
        application_data=JSONParser().parse(request)
        application_serializer = ApplicationSerializer(data=application_data)
        if application_serializer.is_valid():
            application_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        application_data = JSONParser().parse(request)
        application=Application.objects.get(ApplicationId=application_data['ApplicationId'])
        application_serializer=ApplicationSerializer(application,data=application_data)
        if application_serializer.is_valid():
            application_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        application=Application.objects.get(ApplicationId=id)
        application.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)

@csrf_exempt
def commonInformationApi(request,id=0):
    if request.method=='GET':
        common_information = CommonInformation.objects.all()
        common_information_serializer = CommonInformationSerializer(common_information, many=True)
        return JsonResponse(common_information_serializer.data, safe=False)

    elif request.method=='POST':
        common_information_data=JSONParser().parse(request)
        common_information_serializer = CommonInformationSerializer(data=common_information_data)
        if common_information_serializer.is_valid():
            common_information_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        common_information_data = JSONParser().parse(request)
        common_information=CommonInformation.objects.get(CommonInformationId=common_information_data['CommonInformationId'])
        common_information_serializer=CommonInformationSerializer(common_information,data=common_information_data)
        if common_information_serializer.is_valid():
            common_information_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        common_information=CommonInformation.objects.get(CommonInformationId=id)
        common_information.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)