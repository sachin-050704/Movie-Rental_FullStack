from django.urls import path
from .views import *

urlpatterns = [
    path("", movie_list),
    path("wevList/", web_list),
    path("<int:id>/", movie_detail),
    path("add_review/", add_review),
    path("add_web_review/", add_web_review),
    path("toggle/", toggle_watchlist),
    path("watchlist/", get_watchlist),
    path("removewatch/<int:movie_id>/", remove_watchlist),
    path("contactForm/", contact_form)
]