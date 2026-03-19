import pytest
from classes.videos import Video

def test_video_methods_exist():
    assert hasattr(Video, "decrease_copies")
    assert hasattr(Video, "increase_copies")
    assert hasattr(Video, "create_video")