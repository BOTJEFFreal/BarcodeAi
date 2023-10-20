from django.db import models

class PDFFile(models.Model):
    pdf_file = models.FileField(upload_to='pdfs/')
    uploaded_at = models.DateTimeField(auto_now_add=True)


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
        # Calculate Tax
        self.tax = (self.tax_percentage / 100) * self.line_amount

        # Calculate Profit
        self.profit = (self.profit_percentage / 100) * self.line_amount

        # Calculate Final Price
        self.final_price = self.line_amount + self.tax + self.profit

        super().save(*args, **kwargs)
