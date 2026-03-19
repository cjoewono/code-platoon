import pytest
from classes.videos import Video

def test_decrease_copies_error():
    video = Video("Inception", "PG-13", 2010, 0)
    with pytest.raises(ValueError):
        video.decrease_copies()