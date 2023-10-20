from rest_framework import serializers
from .models import * 

class PDFFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDFFile
        fields = ['id', 'pdf_file', 'uploaded_at']

class SellerProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerProduct
        fields = '__all__'
