import pytest
from classes.customers import Customer


def test_customer_attributes_exist():
    customer = Customer(1, "px", "John", "Doe")
    assert hasattr(customer, "_id")
    assert hasattr(customer, "_account_type")
    assert hasattr(customer, "_first_name")
    assert hasattr(customer, "_last_name")
    assert hasattr(customer, "_current_video_rentals")
