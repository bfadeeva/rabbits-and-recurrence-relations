// n - months; function counts amount of pair in nth month
// how to include k - offsprings in calculation?

function fibonacci(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};