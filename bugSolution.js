function foo(x, memo = {}) {
  if (x in memo) {
    return memo[x];
  } 
  if (x == 1) {
    return memo[x] = true;
  } else if (x == 2) {
    return memo[x] = false; 
  } else {
    const result = foo(x - 1, memo) || foo(x - 2, memo);
    memo[x] = result; 
    return result;
  }
}
