function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if (n < 0) {
        return "Must provide a positive integer."
    }

    return n * factorial(n - 1); 
}

module.exports = factorial;
