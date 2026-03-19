import pytest
from classes.customers import Customer


def test_create_customer():
    data = {
        "id": "5",
        "account_type": "px",
        "first_name": "Jane",
        "last_name": "Doe",
        "current_video_rentals": ""
    }

    customer = Customer.create_customer(data)
    assert isinstance(customer, Customer)
    assert customer.first_name == "Jane"
