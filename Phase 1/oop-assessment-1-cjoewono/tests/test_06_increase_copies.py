import pytest
from classes.videos import Video

def test_increase_copies():
    video = Video("Inception", "PG-13", 2010, 1)
    video.increase_copies()
    assert video.copies_available == 2
