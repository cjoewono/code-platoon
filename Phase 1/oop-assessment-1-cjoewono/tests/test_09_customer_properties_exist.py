import pytest
from classes.customers import Customer



def test_customer_properties_exist():
    assert isinstance(Customer.id, property)
    assert isinstance(Customer.account_type, property)
    assert isinstance(Customer.first_name, property)
    assert isinstance(Customer.last_name, property)
    assert isinstance(Customer.current_video_rentals, property)


