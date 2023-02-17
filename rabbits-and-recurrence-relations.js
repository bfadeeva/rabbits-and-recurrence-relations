// n - months; function counts amount of pair in nth month
// how to include k - offsprings in calculation?

/* function fibonacci(n, k) {
    if (n < 3) return 1;
    return (n - 1) + (k * (n - 2));
};
*/ 

function fibonacci(n, k) {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + (k * f[i - 2]);
  }
  return f[n];
}

console.log(fibonacci(35, 2));

/* In this code, we initialize an array f to store the Fibonacci sequence. 
We start with f[0] = 0 and f[1] = 1. 
Then, we loop through the array and calculate each subsequent term 
using the formula f[i] = f[i - 1] + (k * f[i - 2]), 
where k is the number of rabbit pairs produced in each litter.

At the end of the loop, we return the nth term of the Fibonacci sequence, 
which represents the total number of rabbit pairs after n months. 

We store the Fibonacci sequence in an array for two main reasons:

1) Efficiency: By storing the sequence in an array, 
we can avoid recalculating the same values over and over again. 
When calculating the nth number in the Fibonacci sequence, 
we need to know the values of the previous two numbers, 
so if we have already calculated those values, 
we can simply look them up in the array instead of recalculating them.

2) Convenience: By storing the sequence in an array, 
we can easily access any term in the sequence. 
This is especially useful if we need to calculate multiple terms in the sequence, 
or if we need to calculate the sequence for different values of k or starting values.

In summary, storing the Fibonacci sequence in an array allows for more efficient 
and convenient calculation of the sequence, especially when calculating multiple terms 
or when different values of k or starting values are needed. */