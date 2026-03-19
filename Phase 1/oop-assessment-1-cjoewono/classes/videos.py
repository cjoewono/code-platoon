class Video:
    def __init__(self, title, rating, release_year, copies_available):
        self.title = title
        self.rating = rating
        self.release_year = release_year
        self.copies_available = copies_available 
        
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, val):
        if not isinstance(val, str):
            raise ValueError("Title must be text (a string input)")
        if not val.strip():
            raise ValueError("Title cannot be empty")
        self._title = val.strip().title()
    
    @property
    def rating(self):
        return self._rating
    
    @rating.setter
    def rating(self, val):
        if not isinstance(val, str):
            raise ValueError("Rating must be text (a string input)")
        if not val.strip():
            raise ValueError("Rating cannot be empty")
        self._rating = val.strip().upper()
    
    @property
    def release_year(self):
        return self._release_year
    
    @release_year.setter
    def release_year(self, val):
        if isinstance(val, int) and 1972 <= val <= 2016:
            self._release_year = val
        if not isinstance(val, int):
            raise ValueError("Release year must be a number")
    
    @property
    def copies_available(self):
        return self._copies_available
    
    @copies_available.setter
    def copies_available(self, val):
        if not isinstance(val, int):
            raise ValueError("Copies must be a number")
        if val < 0:
            raise ValueError("Copies cannot be a negative number")
        self._copies_available = val
    
    def decrease_copies(self):
        if self.copies_available == 0:
            raise ValueError("Cannot decrease copies below 0")
        self.copies_available -= 1

    def increase_copies(self):
            self.copies_available += 1
    
    def __str__(self):
        return f"{self._title} ({self._release_year}) - {self._rating} - {self._copies_available} copies available"
    
    @classmethod
    def create_video(cls, vid_dict):
        return cls(
            title = vid_dict['title'],
            rating = vid_dict['rating'],
            release_year = int(vid_dict['release_year']),
            copies_available = int(vid_dict['copies_available'])
        )