import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'njsbackend.settings')
django.setup()

from order.models import *


def seed_customer_table():
    cust = Customer(first_name="Bikash", last_name="Das", email="devbikash.1999@gmail.com", phone_number="9304147313", address="NA")
    cust.save()

def seed_order_table():
    order = Order(first_name="Bikash", last_name="Das", email="devbikash.1999@gmail.com", phone_number="9304147313", address="NA")
    order.save()

def seed_item_table():
    item = Item(first_name="Bikash", last_name="Das", email="devbikash.1999@gmail.com", phone_number="9304147313", address="NA")
    item.save()


if __name__ == "__main__":
    # seed_customer_table()
    print("seed data to tables")