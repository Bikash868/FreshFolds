"""
URL configuration for njsbackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from order.views import *

urlpatterns = [
    path('',home, name="home"),
    path('order_per_day/',order_per_day, name="order_per_day"),
    path('customers/',get_order_customer, name="get_order_customer" ),
    path('customers/<str:id>/', get_customer_by_id, name="get_customer_by_id"),
    path('filter/', get_customer_by_slug, name="get_customer_by_slug"),

    path('admin/', admin.site.urls),
]
