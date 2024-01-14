export default function linearSearch(values: number[], target: number): boolean {
    // looping over every element
    for (let value of values) {
        // checking if value is the target we search and return true
        if (value === target) {
            return true;
        }
    }
    // we looped over every element and could not found the target return false
    return false;
}