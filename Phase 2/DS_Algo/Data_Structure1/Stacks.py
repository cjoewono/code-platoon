class Stack:
    def __init__(self):
        self._items = []
        
    def addTop(self, val):
        self._items.append(val)
        
    def peek(self):
        return self._items[-1] if self._items else None
    
    def removeTop(self):
        return self._items.pop() if self._items else None

    def is_empty(self):
        return len(self._items) == 0


def reverse(word):
    stack = Stack()
    reversed_word = ""
    for ltr in word:
        stack.addTop(ltr)
    while not stack.is_empty():
        reversed_word += stack.removeTop()
    return reversed_word

print(reverse("hello"))