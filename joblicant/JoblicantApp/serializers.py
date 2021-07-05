from rest_framework import serializers
from JoblicantApp.models import Application, CommonInformation

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('AppId',
                  'JobTitle',
                  'CompanyName',
                  'DateCompleted',
                  'Status',
                  'InterviewDate',
                  'Result')

class CommonInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonInformation
        fields = ('CommonId',
                  'ResumeFileName',
                  'FullName',
                  'Email',
                  'Phone',
                  'CurrentCompany',
                  'LinkedIn',
                  'Twitter',
                  'Github',
                  'Portfolio',
                  'OtherWebsite')
                  