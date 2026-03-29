# FreshFolds Backend

Django REST API backend for FreshFolds laundry service management system.

## Features

- Customer management
- Order tracking with status updates
- Item pricing and inventory
- Invoice generation
- RESTful JSON API endpoints

## Project Structure

```
backend/
├── njsbackend/              # Django project
│   ├── njsbackend/         # Main project settings
│   ├── order/              # Order management app
│   ├── db.sqlite3          # SQLite database
│   └── manage.py           # Django management script
├── requirements.txt        # Production dependencies
├── requirements-dev.txt    # Development dependencies
└── requirements-minimal.txt # Minimal dependencies
```

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   pip install -r requirements-minimal.txt
   ```

2. **Run Migrations**
   ```bash
   cd njsbackend
   python manage.py makemigrations
   python manage.py migrate
   ```

3. **Create Superuser**
   ```bash
   python manage.py createsuperuser
   ```

4. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

## API Endpoints

- `GET /` - Home endpoint
- `GET /order_per_day/` - Daily order count
- `GET /customers/` - List all customers
- `GET /customers/<id>/` - Get customer by ID
- `GET /filter/` - Filter customers by query parameters
- `GET /admin/` - Django admin interface

## Environment Variables

Create a `.env` file in the backend directory with:

```
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

## Database Models

- **Customer**: first_name, last_name, email, phone_number, address
- **Order**: customer, order_date, delivery_date, status, total_price
- **Item**: item_name, price_per_unit
- **Order_Item**: order, item, quantity_ordered
- **Invoice**: order, issue_date, due_date, total_amount

## Development Setup

For development with additional tools:

```bash
pip install -r requirements-dev.txt
```

## Production Deployment

For production deployment:

```bash
pip install -r requirements.txt
```

Then configure:
- PostgreSQL database
- Environment variables
- Static files serving
- CORS settings for frontend domain 

## Super user info
- 
- 123456