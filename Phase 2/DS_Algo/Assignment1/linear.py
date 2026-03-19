def linear_search_unsorted(arr, target):
    steps = 0
    for idx in range(len(arr)):
        steps += 1
        if arr[idx] == target:
            return (idx, steps)
    return(-1, steps)