from django.http import JsonResponse
from django.views import View
from rest_framework import generics

from  .functions import get_JSON_from_pdf
from .models import *
from .serializers import *

class PDFFileUploadView(View):
    def post(self, request, *args, **kwargs):
        pdf_file = request.FILES.get('pdf_file')
        if pdf_file:
            pdf_entry = PDFFile(pdf_file=pdf_file)
            pdf_entry.save()

            # Get the filename
            filename = pdf_entry.pdf_file.name

            # Run the function and get JSON data
            json_data = get_JSON_from_pdf(filename)

            return JsonResponse({'json_data': json_data}, status=201)

        return JsonResponse({'error': 'No PDF file provided'}, status=400)

class SellerProductListView(generics.ListAPIView):
    queryset = SellerProduct.objects.all()
    serializer_class = SellerProductSerializer

class SellerProductCreateView(generics.CreateAPIView):
    queryset = SellerProduct.objects.all()
    serializer_class = SellerProductSerializer
