from django.urls import path
from .views import *

urlpatterns = [
    path('register/', register_page, name='register_page'),
    path('userList/', user_list, name='user_list'),
    path('updateUser/<str:username>', update_user, name='update_user'),
    path('profile/', profile, name='profile'),
]