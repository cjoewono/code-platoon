import pytest
from classes.customers import Customer, Video


def test_add_rental():
    customer = Customer(1, "px", "John", "Doe")
    video = Video("Inception", "PG-13", 2010, 2)

    customer.add_rental(video)

    assert "Inception" in customer.current_video_rentals
    assert video.copies_available == 1


