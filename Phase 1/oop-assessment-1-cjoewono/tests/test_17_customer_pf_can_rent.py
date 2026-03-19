from classes.customer_types import (Customer_pf)
from classes.videos import Video


def test_customer_pf_rejects_r_rating():
    customer = Customer_pf(1, "pf", "John", "Doe")
    video = Video("It", "R", 2017, 2)
    assert not customer.can_rent(video)



