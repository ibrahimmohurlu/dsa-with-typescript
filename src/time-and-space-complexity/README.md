# What is Big O?

Big O is a way to categorize your algorithms time or memory requirements based on the input (expressed as N). It is not meant to be an exact measurement. It will not tell you how many CPU cycles it takes, instead it is meant to generalize the <b>growth</b> of your algorithm. It tells us that as your input grows, how fast does computation or memory grows?

<b>O(N)</b> means your algorithm grows linearly based on input.

## Important Concepts

1. Growth is with respect to the input
2. Constants are dropped <br>
   O(2N) -> O(N) Big O is meant to describe the growth of the algorithm. The constant eventually becomes irrelevant.<br>

   ```
   1-) N = 1, O(10N) = 10, O(N^2) = 1
   2-) N = 5, O(10N) = 50, O(N^2) = 25
   3-) N = 100, O(10N) = 1,000, O(N^2) = 10,000 // 10x bigger
   4-) N = 1000, O(10N) = 10,000, O(N^2) = 1,000,000 // 100x bigger
   5-) N = 10000, O(10N) = 100,000, O(N^2) = 100,000,000 // 1000x bigger

   we drop constants. Therefore O(10N) is faster than O(N^2) but practically speaking, you would probably win for some small set of input (1-2).
   ```

3. Worst case is usually the way we measure

## Common Big-o Complexities

![Common Big-o Complexities](https://he-s3.s3.amazonaws.com/media/uploads/ece920b.png) <br>
[Source](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)
