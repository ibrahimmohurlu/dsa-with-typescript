export default function binarySearch(values: number[], target: number): boolean {
    let low = 0;
    let high = values.length;

    while (low < high) {
        // middle index of the array
        const middle = Math.floor(low + (high - low) / 2);
        const value = values[middle];
        // we found the target
        if (value === target) {
            return true;
        } else if (value < target) {
            // target is on the high side
            low = middle + 1;
        } else {
            // target is on the lower side
            high = middle;
        }
    }
    // does not exists
    return false;
}