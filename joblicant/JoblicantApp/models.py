from django.db import models

SENT="SENT"
INTERVIEWONE="INTERVIEWONE"
INTERVIEWTWO="INTERVIEWTWO"
INTERVIEWTHREE="INTERVIEWTHREE"
ACCEPTED="ACCEPTED"
REJECTED="REJECTED"

# Create your models here.

class Application(models.Model):
    AppId = models.AutoField(primary_key=True)
    JobTitle = models.CharField(max_length=100)
    CompanyName = models.CharField(max_length=100)
    DateCompleted = models.DateField(blank=True, null=True)
    Status = models.CharField(max_length=100)
    InterviewDate = models.DateField(blank=True, null=True)
    Result = models.CharField(max_length=100, blank=True, null=True)
    Notes = models.CharField(max_length=500, blank=True, null=True)

class CommonInformation(models.Model):
    CommonId = models.AutoField(primary_key=True)
    ResumeFileName = models.CharField(max_length=100, blank=True, null=True)
    FullName = models.CharField(max_length=100, blank=True, null=True)
    Email = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.IntegerField(blank=True, null=True)
    CurrentCompany = models.CharField(max_length=100, blank=True, null=True)
    LinkedIn = models.CharField(max_length=100, blank=True, null=True)
    Twitter = models.CharField(max_length=100, blank=True, null=True)
    Github = models.CharField(max_length=100, blank=True, null=True)
    Portfolio = models.CharField(max_length=100, blank=True, null=True)
    OtherWebsite = models.CharField(max_length=100, blank=True, null=True)