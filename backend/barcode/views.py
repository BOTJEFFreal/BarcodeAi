from rest_framework import generics
from .models import *
from .serializers import *

class PDFFileUploadView(generics.CreateAPIView):
    queryset = PDFFile.objects.all()
    serializer_class = PDFFileSerializer

class SellerProductListView(generics.ListAPIView):
    queryset = SellerProduct.objects.all()
    serializer_class = SellerProductSerializer
