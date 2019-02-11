from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    email = models.EmailField(_('email address'), unique=True, null=False)
    username_selected = models.BooleanField(default=False)
    first_name = models.CharField(_('first name'), max_length=30, blank=True, null=True)
    last_name = models.CharField(_('last name'), max_length=150, blank=True, null=True)
    language = models.CharField(max_length=2, default='nl')

    def __str__(self):
        return '{} ({})'.format(self.username, self.email)


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True
