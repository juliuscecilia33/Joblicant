from rest_framework import serializers
from JoblicantApp.models import Application, CommonInformation

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('ApplicationId',
                  'JobTitle',
                  'CompanyName',
                  'DateCompleted',
                  'Status',
                  'InterviewDate',
                  'Review')

class CommonInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonInformation
        fields = ('CommonInformationId',
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
                  