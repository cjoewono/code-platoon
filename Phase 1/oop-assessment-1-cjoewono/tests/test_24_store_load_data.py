from classes.store import Store, Customer, Video

def test_store_load_data():
    store = Store("Test Store")
    Customer.last_id = 0  # Reset ID counter for consistent testing

    customers = store.load_data("./data/customers.csv", "customer")
    videos = store.load_data("./data/videos.csv", "video")

    assert isinstance(list(customers.values())[0], Customer)
    assert isinstance(list(videos.values())[0], Video)
    assert len(videos.keys()) == 10
    assert len(customers.keys()) == 6
