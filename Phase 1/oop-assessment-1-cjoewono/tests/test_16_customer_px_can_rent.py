from classes.customer_types import (
    Customer_px,
)
from classes.videos import Video


def test_customer_px_can_rent():
    customer = Customer_px(1, "px", "John", "Doe")
    video = Video("Inception", "PG-13", 2010, 2)
    assert customer.can_rent(video)
