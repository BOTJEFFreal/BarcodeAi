import requests
import json
import subprocess
import sys
import os

from django.conf import settings
from .OpenAI_functions import *

NANONETS_API_KEY=os.environ.get('NANONETS_API_KEY')

def get_JSON_from_pdf(filename):

    # Get the PDF filepath from media/pdfs
    file_path = os.path.join(settings.MEDIA_ROOT, 'pdfs', filename)

    url = 'https://app.nanonets.com/api/v2/OCR/Model/ef653ad5-a2fd-486e-af23-d9ec6b677db5/LabelFile/?async=false'

    data = {'file': open(file_path, 'rb')}

    response = requests.post(
        url,
        auth=requests.auth.HTTPBasicAuth(NANONETS_API_KEY, ""),
        files=data,
    )
    response_json = response.json()

    return response_json

