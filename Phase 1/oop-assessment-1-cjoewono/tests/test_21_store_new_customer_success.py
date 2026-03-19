import pytest
from classes.store import Store, Customer_px

def test_new_customer_success(monkeypatch):
    store = Store("Test Store")
    inputs = iter(["Jane", "Smith", "px"])
    monkeypatch.setattr("builtins.input", lambda _: next(inputs))

    customer = store.new_customer()

    assert isinstance(customer, Customer_px)
    assert customer.first_name == "Jane"
    assert customer.last_name == "Smith"
    assert customer.account_type == "px"