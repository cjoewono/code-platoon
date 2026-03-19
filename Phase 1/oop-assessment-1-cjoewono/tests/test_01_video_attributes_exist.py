import pytest
from classes.videos import Video

def test_video_attributes_exist():
    video = Video("Inception", "PG-13", 2010, 5)

    assert hasattr(video, "_title")
    assert hasattr(video, "_rating")
    assert hasattr(video, "_release_year")
    assert hasattr(video, "_copies_available")