# Binary Search

Binary search is an efficient algorithm for finding an item from a <b>sorted list</b> of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

<b>Complexity: O(logN)</b>

![Binary Search Img](https://media.geeksforgeeks.org/wp-content/uploads/20230522163247/mid-in-binary-search-768.webp)<br>
[Source](https://www.geeksforgeeks.org/binary-search/)<br>

- Divide the search space into two halves by finding the middle index “mid”.
- Compare the middle element of the search space with the key.
- If the key is found at middle element, the process is terminated.
- If the key is not found at middle element, choose which half will be used as the next search space.
  - If the key is smaller than the middle element, then the left side is used for next search.
  - If the key is larger than the middle element, then the right side is used for next search.
- This process is continued until the key is found or the total search space is exhausted.
