/**
 * @description swaps leftIndex element with rightIndex element of the array
 * @param arr array that swap operation will be performed.
 * @param leftIndex first element to be swapped.
 * @param rightIndex second element to be swapped.
 * 
 */
function swap(items: number[], leftIndex: number, rightIndex: number) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items: number[], left: number, right: number) {
    let pivot = items[Math.floor((right + left) / 2)]; //middle element
    let i = left; //left pointer
    let j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
export default function quicksort(items: number[]) {
    return recursiveQuicksort(items, 0, items.length - 1)
}
// this function is wrapped to pass only array, not he indices.
function recursiveQuicksort(items: number[], left: number, right: number) {
    let newPivot;
    if (items.length > 1) {
        newPivot = partition(items, left, right); //index returned from partition
        if (left < newPivot - 1) { //more elements on the left side of the pivot
            recursiveQuicksort(items, left, newPivot - 1);
        }
        if (newPivot < right) { //more elements on the right side of the pivot
            recursiveQuicksort(items, newPivot, right);
        }
    }
    return items;
}