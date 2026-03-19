import pytest
from classes.videos import Video

def test_create_video():
    data = {
        "title": "Inception",
        "rating": "PG-13",
        "release_year": "2010",
        "copies_available": "5"
    }
    video = Video.create_video(data)
    assert isinstance(video, Video)
    assert video.title == "Inception"