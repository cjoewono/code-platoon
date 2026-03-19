class Queues:
    def __init__(self):
        self._items = []
    
    def addRight (self, val):
        self._items.append(val)
        
    def removeLeft (self):
        return self._items.pop(0) if self._items else None
    
    def peek(self):
        return self._items[0] if self._items else None