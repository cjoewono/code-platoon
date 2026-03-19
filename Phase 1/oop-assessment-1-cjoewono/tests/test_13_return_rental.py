import pytest
from classes.customers import Customer, Video


def test_return_rental():
    video = Video("Inception", "PG-13", 2010, 2)
    customer = Customer(1, "px", "John", "Doe", ["Inception"])

    customer.return_rental(video)

    assert "Inception" not in customer.current_video_rentals
    assert video.copies_available == 3
