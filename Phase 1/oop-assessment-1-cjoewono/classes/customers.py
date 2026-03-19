from classes.videos import Video
class Customer:
    
    last_id = 0
    
    ACCOUNT_TYPES = ('sx', 'px', 'sf', 'pf')
    
    def __init__(self, customer_id, account_type, first_name, last_name, current_video_rentals = []):
        self.id = customer_id
        self.account_type = account_type
        self.first_name = first_name
        self.last_name = last_name
        self.current_video_rentals = current_video_rentals if current_video_rentals is not None else []
    
    @property
    def id(self):
        return self._id
    
    @id.setter
    def id(self, val):
        if isinstance(val, str):
            val = int(val)
        if not isinstance(val,int) or val <= 0:
            raise ValueError("ID must be a positive number")
        if val > Customer.last_id:
            Customer.last_id = val
        self._id = val
    
    @property
    def account_type(self):
        return self._account_type
    
    @account_type.setter
    def account_type(self, val):
        if val not in Customer.ACCOUNT_TYPES:
            raise ValueError(f"Select from the following account types: {Customer.ACCOUNT_TYPES}")
        self._account_type = val
    
    @property
    def first_name(self):
        return self._first_name
    
    @first_name.setter
    def first_name(self, val):
        if not isinstance(val, str) or not val.strip():
            raise ValueError("First name must be non-empty text")
        if val.isalpha():
            self._first_name = val
    
    @property
    def last_name(self):
        return self._last_name
    
    @last_name.setter
    def last_name(self, val):
        if not isinstance(val, str) or not val.strip():
            raise ValueError("Last name must be non-empty text")
        if val.isalpha():
            self._last_name = val    
    
    @property
    def current_video_rentals(self):
        return self._current_video_rentals
    
    @current_video_rentals.setter
    def current_video_rentals(self, val):
        if not isinstance(val, list):
            raise ValueError("Current video rentals must be a list")
        self._current_video_rentals = val
    
    def view_rentals(self):
        if not self._current_video_rentals:
            return f"{self._first_name} {self._last_name} has no current rentals."
        return f"{self._first_name} {self._last_name}'s rentals: {self._current_video_rentals}"
    
    def can_rent(self):
        return True
    
    def add_rental(self, video):
        self._current_video_rentals.append(video.title)
        video.decrease_copies()
        
    def return_rental(self, video):
        if video.title in self._current_video_rentals:
            self._current_video_rentals.remove(video.title)
            video.increase_copies()
    
    def __str__(self):
        return f"ID: {self._id}, {self._first_name} {self._last_name}, {self._account_type}, Rentals: {self._current_video_rentals}"
    
    @classmethod
    def generate_id(cls):
        cls.last_id += 1
        return cls.last_id
    
    @classmethod
    def create_customer(cls, customer_dict):
        return cls(
            customer_id = customer_dict['id'],
            account_type = customer_dict['account_type'],
            first_name = customer_dict['first_name'],
            last_name = customer_dict['last_name']
        )