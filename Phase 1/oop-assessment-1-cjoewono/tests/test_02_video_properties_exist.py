import pytest
from classes.videos import Video

def test_video_properties_exist():
    assert isinstance(Video.title, property)
    assert isinstance(Video.rating, property)
    assert isinstance(Video.release_year, property)
    assert isinstance(Video.copies_available, property)