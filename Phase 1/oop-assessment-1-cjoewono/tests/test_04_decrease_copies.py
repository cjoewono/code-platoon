import pytest
from classes.videos import Video

def test_decrease_copies():
    video = Video("Inception", "PG-13", 2010, 2)
    video.decrease_copies()
    assert video.copies_available == 1