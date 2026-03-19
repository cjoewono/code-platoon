import pytest
from classes.store import Store, Customer

def test_new_customer_success(monkeypatch):
    Customer.last_id = 0  # Reset ID counter for consistent testing 
    store = Store("Test Store")
    inputs = iter(["aodifhnadf", "1", "2", "3", "John", "Doe", "sf","4", "7", "Up", "5", "7", "Up", "6"])
    monkeypatch.setattr("builtins.input", lambda _: next(inputs))

    end_msg = store.run_store()

    assert end_msg == "Thank you for visiting Test Store! Goodbye!"
    assert len(store.customers.keys()) == 7
    assert store.customers.get(7).current_video_rentals == []