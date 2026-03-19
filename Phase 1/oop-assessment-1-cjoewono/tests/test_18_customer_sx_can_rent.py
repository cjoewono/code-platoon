from classes.customer_types import (
    Customer_sx
)
from classes.videos import Video

def test_customer_sx_limit():
    video = Video("Inception", "PG-13", 2010, 2)
    customer = Customer_sx(1, "sx", "John", "Doe", ["Inception"])
    assert not customer.can_rent(video)
