# Bubble Sort

Bubble sort is a simple algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. For example if you are ordering elements from smallest to largest this algorithm guarantees that largest element will be ended in the last spot. We know that largest element is in the right spot so we dont have to check the last spot. First iteration we make N check (loop over the whole array), second iteration we make (N-1) check (exclude last spot),third iteration we make (N-2) check... this goes on until N=1. This bring us this;

$$N+(N-1)+(N-2)+.....+2+1 =\frac{N(N+1)}{2}=O(N^2+N)=O(N^2)$$

- Traverse from left and compare adjacent elements and the higher one is placed at right side.
- In this way, the largest element is moved to the rightmost end at first.
- This process is then continued to find the second largest and place it and so on until the data is sorted.
