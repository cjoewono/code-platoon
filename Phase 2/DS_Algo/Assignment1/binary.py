def binary_search_sorted(arr, target):
    left, right = 0, len(arr)-1
    
    steps = 0
    
    while left <= right:
        steps += 1
        mid = (left+right) // 2     
        if arr[mid] == target:
            return (mid, steps)
        elif target < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1
    return -1