from django.urls import path, re_path

from .views import *

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('product-list/', ProductListView.as_view()),
    path('product-category/', ProductCategoryView.as_view()),
    path('product/<int:pk>', ProductView.as_view()),
    
    path('order/', OrderListView.as_view()),
    path('order/<int:pk>', OrderView.as_view()),
    
    path('order-item/<int:pk>', OrderItemView.as_view()),
    path('order-item/', OrderItemListView.as_view()),
    
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
]
