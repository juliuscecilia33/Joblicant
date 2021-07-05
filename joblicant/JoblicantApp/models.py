from django.db import models

# Create your models here.

class Application(models.Model):
    JobTitle = models.CharField(max_length=100)
    CompanyName = models.CharField(max_length=100)
    DateCompleted = models.DateField()
    STATUS_OPTIONS = (
        ('S', 'Sent'),
        ('I1', 'Interview[1]'),
        ('I2', 'Interview[2]'),
        ('I3', 'Interview[3]'),
    )
    RESULT_OPTIONS = (
        ('A', 'Accepted'),
        ('R', 'Rejected')
    )
    Status = models.CharField(max_length=15, choices=STATUS_OPTIONS)
    InterviewDate = models.DateField()
    Review = models.CharField(max_length=15, choices=RESULT_OPTIONS)

class CommonInformation(models.Model):
    ResumeFileName = models.CharField(max_length=100)
    FullName = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Phone = models.IntegerField()
    CurrentCompany = models.CharField(max_length=100)
    LinkedIn = models.CharField(max_length=100)
    Twitter = models.CharField(max_length=100)
    Github = models.CharField(max_length=100)
    Portfolio = models.CharField(max_length=100)
    OtherWebsite = models.CharField(max_length=100)