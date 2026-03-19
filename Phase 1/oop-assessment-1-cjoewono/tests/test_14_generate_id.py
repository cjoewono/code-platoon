import pytest
from classes.customers import Customer



def test_generate_id():
    current = Customer.last_id
    new_id = Customer.generate_id()
    assert new_id == current + 1


