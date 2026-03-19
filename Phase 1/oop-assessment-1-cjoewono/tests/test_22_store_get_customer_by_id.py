import pytest
from classes.store import Store, Customer_px, Customer

def test_new_customer_success(monkeypatch):
    Customer.last_id = 0  # Reset ID counter for consistent testing
    store = Store("Test Store")
    inputs = iter(["6"])
    monkeypatch.setattr("builtins.input", lambda _: next(inputs))

    customer = store.get_customer_by_id()

    assert isinstance(customer, Customer_px)
    assert customer.first_name == "Joey"
    assert customer.last_name == "Tribbiani"
    assert customer.account_type == "px"