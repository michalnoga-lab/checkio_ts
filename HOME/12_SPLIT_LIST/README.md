You have to split a given array into two arrays. If it has an odd amount of elements, then the first array should have more elements. If it has no elements, then two empty arrays should be returned.

example

Input: List.

Output: List of two lists.

Example:
splitList([1, 2, 3, 4, 5, 6]) == [[1, 2, 3], [4, 5, 6]]
splitList([1, 2, 3]) == [[1, 2], [3]]
splitList([1, 2, 3, 4, 5]) == [[1, 2, 3], [4, 5]]
splitList([1]) == [[1], []]
splitList([]) == [[], []]
