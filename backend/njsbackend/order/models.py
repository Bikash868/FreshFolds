from django.db import models
import uuid

# Create your models here.
class Customer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    address = models.TextField(null = True, blank = True)


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE)
    order_date = models.DateField()
    delivery_date = models.DateField()
    status = models.CharField(max_length=50)
    total_price = models.DecimalField(max_digits = 10, decimal_places = 2)


#item pricing table
class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable = False)
    item_name = models.CharField(max_length=100)
    price_per_unit = models.DecimalField(max_digits = 10, decimal_places = 2)


#item order table
class Order_Item(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    order = models.ForeignKey(Order, on_delete = models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity_ordered = models.IntegerField()


#invoice table
class Invoice(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    issue_date = models.DateField()
    due_date = models.DateField()
    total_amount = models.DecimalField(max_digits = 12, decimal_places = 2)
