# JavaScript Stack Overflow Bug

This repository demonstrates a common error in JavaScript: stack overflow due to uncontrolled recursion.  The `foo` function recursively calls itself without a proper base case for sufficiently large inputs, leading to exceeding the call stack limit. The solution involves memoization to avoid redundant computations and prevents stack overflow.

## Bug
The provided JavaScript function `foo` exhibits a stack overflow error for larger inputs, leading to a crash.