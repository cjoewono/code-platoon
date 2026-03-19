from classes.customer_types import (
    Customer_sf
)
from classes.videos import Video


def test_customer_sf_limit_and_rating():
    video = Video("It", "R", 2017, 2)
    customer = Customer_sf(1, "sf", "John", "Doe")
    assert not customer.can_rent(video)