import pytest
from classes.customers import Customer

def test_view_rentals():
    customer = Customer(1, "px", "John", "Doe", ["Inception"])
    assert "Inception" in customer.view_rentals()


