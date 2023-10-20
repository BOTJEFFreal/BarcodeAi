from django.urls import path
from .views import *

urlpatterns = [
    path('upload-pdf/', PDFFileUploadView.as_view(), name='upload-pdf'),
    path('seller-products/', SellerProductListView.as_view(), name='seller-product-list'),
]
