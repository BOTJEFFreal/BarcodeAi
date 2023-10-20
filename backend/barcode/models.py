from django.db import models

class PDFFile(models.Model):
    pdf_file = models.FileField(upload_to='pdfs/')
    filename = models.CharField(max_length=100, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.filename = self.pdf_file.name if self.pdf_file else ''

        super().save(*args, **kwargs)


class SellerProduct(models.Model):
    product = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    line_amount = models.DecimalField(max_digits=10, decimal_places=2)
    tax_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=10)
    tax = models.DecimalField(max_digits=10, decimal_places=2, editable=False)
    profit_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=10)
    profit = models.DecimalField(max_digits=10, decimal_places=2, editable=False)
    final_price = models.DecimalField(max_digits=10, decimal_places=2, editable=False)

    def save(self, *args, **kwargs):
        self.tax = (self.tax_percentage / 100) * self.line_amount
        self.profit = (self.profit_percentage / 100) * self.line_amount
        self.final_price = self.line_amount + self.tax + self.profit

        super().save(*args, **kwargs)
