import pytest
from classes.store import Store, Video

def test_new_customer_success(monkeypatch):
    store = Store("Test Store")
    inputs = iter(["Up"])
    monkeypatch.setattr("builtins.input", lambda _: next(inputs))

    video = store.get_video_by_title()


    assert isinstance(video, Video)
    assert video.title == "Up"