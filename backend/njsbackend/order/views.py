from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def home(request):
    data = {
        'name': 'John Doe',
        'age': 30,
        'email': 'john.doe@example.com'
    }
    return JsonResponse(data, status=200)


def order_per_day(request):
    data = {
        'count': 35
    }
    return JsonResponse(data, status=200)

def get_order_customer(request):
    customer_list = [
        {
            'id': 'cust-001',
            'name':'Rakesh kumar',
            'status': 4,
            'order_date': '10/02/23',
            'expected_date': '12/02/2023',
            'no_of_items': 4
        },
        {
            'id': 'cust-002',
            'name':'Prakhar Mishra',
            'status': 3,
            'order_date': '13/02/23',
            'expected_date': '15/02/2023',
            'no_of_items': 6
        }
    ]
    return JsonResponse(customer_list, status=200, safe=False)

def get_customer_by_id(request, id):
    path_parts = request.path.split('/')
    customer_id = path_parts[-1]
    customer_details = {
            'id': 'cust-002',
            'name':'Prakhar Mishra',
            'status': 3,
            'order_date': '13/02/23',
            'expected_date': '15/02/2023',
            'no_of_items': 6
        }
    print("requested order for, ",id)
    return JsonResponse(customer_details, status = 200, safe=False)

#http://127.0.0.1:8000/filter/?id=1&email=bik@gmail.com&phone=9934
def get_customer_by_slug(request):
    id = request.GET.get('id')
    phone = request.GET.get('phone')
    email = request.GET.get('email')
    demo = request.GET.get('demo')
    print(id, phone,email,demo)
    customer_details = {
            'id': 'cust-002',
            'name':'Prakhar Mishra',
            'status': 3,
            'order_date': '13/02/23',
            'expected_date': '15/02/2023',
            'no_of_items': 6
        }
    return JsonResponse(customer_details, status = 200, safe=False)



#view that returns chart data for the dashboard