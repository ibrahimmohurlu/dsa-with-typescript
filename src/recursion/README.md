# Recursion

The function that calls itself is recursive function. A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems. It is essential to know that we should provide a certain case (<b>Base Case</b>) in order to terminate this recursion process.

We can say that recursive functions have minimum 2 case;

- <b>Base Case</b><br>
  In this case we aim to reach the smallest subproblem to terminate recursive process
- <b>Recursive Case</b><br>
  In this case we aim to call the function with smaller input (subproblem). This case also can be divided into 3 steps;
  - <b>Before Recursion:</b> Operations before calling recursion.
  - <b>Recursion:</b> Calling function itself.
  - <b>After Recursion:</b> Operations after function called and returned.

## Example

Lets try to sum numbers from 1 to N both of them inclusive. We can do that with a simple loop but we will use the recursive approach. First we need to define the subproblems. Lets say we want to find the sum of numbers from 1 to 5 which is <b>sum(5)=1+2+3+4+5</b> we can also say that <b>sum(5)=5+<u>sum(4)</u></b>. Now we need to find the <b>sum(4)</b> which we can write that as <b>sum(4)=4+sum(3)</b>. We can generalize this in to formula like <b>sum(N)=N+sum(N-1)</b>. This formula means sum of the numbers up to N depends on sum of numbers up to N-1. Now we have an idea to define subproblems but what is our base case or what is simplest subproblem to solve? Its simple, sum of the numbers depends on the previous sum so what is the sum from 1 to 1? Its 1 because there is no previous numbers to sum. So we can summarise that as;

- <b>Base Case:</b> sum(1)=1
- <b>Recursive Case:</b> sum(N)=N+<u>sum(N-1)</u>

We can implement this as follows;

```ts
function sum(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
```

There is a little bug in this code that what happens if the pass the negative or 0 as argument but we assume n is bigger than 0 for simplicity. We can prevent that changing the if statement to return 1 if value is less than or equal to 1.

### Callstack

Lets assume we called the sum function like below;

```ts
const a = sum(5);
```

Callstack will be like below;

| **_function_** | **_arg_** | **_return address_** |  **_return value_**  |
| :------------: | :-------: | :------------------: | :------------------: |
|     sum(5)     |     5     |          a           |       5+sum(4)       |
|     sum(4)     |     4     |        sum(5)        |       4+sum(3)       |
|     sum(3)     |     3     |        sum(4)        |       3+sum(2)       |
|     sum(2)     |     2     |        sum(3)        |       2+sum(1)       |
|     sum(1)     |     1     |        sum(2)        | 1 <b>(Base Case)</b> |

## Steps to take before implementing a recursive function

```
The algorithmic steps for implementing recursion in a function are as follows:

Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

Step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.
```

[Source](https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/)<br>
