from binary import binary_search_sorted
from linear import linear_search_unsorted

unsorted_list = [42, 15, 7, 30, 22, 10, 18]
indexed_list = [(val, idx) for idx, val in enumerate(unsorted_list)]
sorted_indexed_list = sorted(indexed_list, key=lambda x: x[0])
target_1 = 30
result_linear_search_1 = linear_search_unsorted(unsorted_list, target_1)
result_binary_search_1 = binary_search_sorted(sorted(sorted_list), target_1)
print(f"Scenario 1 (Linear Search): Target {target_1} found at index {result_linear_search_1[0]} in {result_linear_search_1[1]} steps.")
print(f"Scenario 1 (Binary Search): Target {target_1} found at index {result_binary_search_1[0]} in {result_binary_search_1[1]} steps.")