from classes.customers import Customer

class Customer_px(Customer):
    def can_rent(self, video):
        if len(self._current_video_rentals) >= 3:
            return False
        if video.copies_available <= 0:
            return False
        return True

class Customer_pf(Customer):

    def can_rent(self, video):
        if len(self._current_video_rentals) >= 3:
            return False
        if video.copies_available <= 0:
            return False
        if video.rating == "R":
            return False
        return True

class Customer_sx(Customer):

    def can_rent(self, video):
        if len(self._current_video_rentals) >= 1:
            return False
        if video.copies_available <= 0:
            return False
        return True

class Customer_sf(Customer):

    def can_rent(self, video):
        if len(self._current_video_rentals) >= 1:
            return False
        if video.copies_available <= 0:
            return False
        if video.rating == "R":
            return False
        return True
    
