from django.urls import path
from .views import *

urlpatterns = [
    path('upload-pdf/', PDFFileUploadView.as_view(), name='upload-pdf'),
    path('seller-products/get/', SellerProductListView.as_view(), name='seller-product-list'),
    path('seller-products/create/', SellerProductCreateView.as_view(), name='seller-product-create'),

]
