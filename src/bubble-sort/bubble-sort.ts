export default function bubbleSort(values: number[]): number[] {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - 1 - i; j++) {
            if (values[j] > values[j + 1]) {
                const temp = values[j+1];
                values[j + 1] = values[j];
                values[j] = temp;
            }
        }
    }
    return values;
}