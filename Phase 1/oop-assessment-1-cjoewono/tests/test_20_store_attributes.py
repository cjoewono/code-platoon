from classes.store import Store
from classes.customers import Customer
from classes.videos import Video


def test_store_initialization():
    store = Store("Test Store")
    assert store.name == "Test Store"
    assert isinstance(store.customer_types, dict)
    assert isinstance(store.customers, dict)
    assert isinstance(list(store.customers.values())[0], Customer)
    assert isinstance(store.inventory, dict)
    assert isinstance(list(store.inventory.values())[0], Video)
