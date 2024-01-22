# Quicksort

Quicksort is a divide and conquer algorithm that divides array into sub-arrays and order these sub-arrays recursively until whole array is sorted. In quicksort we choose an element from the array as pivot. Pivot can be any index in the array. Dividing sub-array happens based on the pivot.We try to put values smaller than the pivot left side of the pivot, and bigger values to right side of the pivot. In this we can now that on the next iteration array is more sorted than before.

## Complexity

- <b>Worst-Case:</b> <u><b>O(n^2)</b></u>
- <b>Average-Case:</b> <u><b>O(n log n)</b></u>
- <b>Best-Case:</b> <u><b>O(n log n)</b></u>

---

- Divide by choosing any element in the subarray array[p..r]. Call this element the pivot.
  Rearrange the elements in array[p..r] so that all elements in array[p..r] that are less than or equal to the pivot are to its left and all elements that are greater than the pivot are to its right. We call this procedure partitioning. At this point, it doesn't matter what order the elements to the left of the pivot are in relation to each other, and the same holds for the elements to the right of the pivot. We just care that each element is somewhere on the correct side of the pivot.
  As a matter of practice, we'll always choose the rightmost element in the subarray, array[r], as the pivot. So, for example, if the subarray consists of [9, 7, 5, 11, 12, 2, 14, 3, 10, 6], then we choose 6 as the pivot. After partitioning, the subarray might look like [5, 2, 3, 6, 12, 7, 14, 9, 10, 11]. Let q be the index of where the pivot ends up.
- Conquer by recursively sorting the subarrays array[p..q-1] (all elements to the left of the pivot, which must be less than or equal to the pivot) and array[q+1..r] (all elements to the right of the pivot, which must be greater than the pivot).
- Combine by doing nothing. Once the conquer step recursively sorts, we are done. Why? All elements to the left of the pivot, in array[p..q-1], are less than or equal to the pivot and are sorted, and all elements to the right of the pivot, in array[q+1..r], are greater than the pivot and are sorted. The elements in array[p..r] can't help but be sorted!
  Think about our example. After recursively sorting the subarrays to the left and right of the pivot, the subarray to the left of the pivot is [2, 3, 5], and the subarray to the right of the pivot is [7, 9, 10, 11, 12, 14]. So the subarray has [2, 3, 5], followed by 6, followed by [7, 9, 10, 11, 12, 14]. The subarray is sorted.

  ![quicksort img](https://cdn.kastatic.org/ka-perseus-images/9876d4dc59e01a4742860ae1831c20f654ed7959.png)<br>
  [Source](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)<br>
