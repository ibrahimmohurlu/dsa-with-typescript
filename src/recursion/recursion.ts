
export function sum(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n + sum(n - 1);
}

export function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}