from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey('ProductCategory', on_delete=models.CASCADE)
    image = models.TextField()
    quantity = models.IntegerField()	
    price = models.FloatField()
    
    def __str__(self):
        return self.title
    
    
class ProductCategory(models.Model):
    name = models.CharField(max_length=255)
    image = models.TextField()
    
    def __str__(self):
        return self.name
  
  
class OrderItem(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    
    quantity = models.IntegerField()
    
    def __str__(self):
        return self.product.title
    
    
class Order(models.Model):
    order_number = models.IntegerField()
    
    products = models.ManyToManyField(OrderItem)
    
    phone = models.CharField(max_length=255) 
    
    address = models.TextField()
    
    reference_point = models.TextField(null=True, blank=True)
    
    comments = models.TextField(null=True, blank=True)
    
    total_amount = models.FloatField()
    
    delivery_cost = models.FloatField()
    
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='order', 
        null=True, 
        blank=True
    )
    
    def __str__(self):
        return str(self.order_number)
    
    

    