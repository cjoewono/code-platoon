import pytest
from classes.customers import Customer

def test_customer_methods_exist():
    assert hasattr(Customer, "view_rentals")
    assert hasattr(Customer, "can_rent")
    assert hasattr(Customer, "add_rental")
    assert hasattr(Customer, "return_rental")
    assert hasattr(Customer, "generate_id")
    assert hasattr(Customer, "create_customer")


