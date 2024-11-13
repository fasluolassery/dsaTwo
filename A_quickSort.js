//! normal algorithm
function quickSort(arr, lb = 0, up = arr.length - 1) {
    if (lb < up) {
        let location = partition(arr, lb, up)
        quickSort(arr, lb, location - 1)
        quickSort(arr, location + 1, up)
    }
    return arr
}

function partition(arr, lb , up) {
    let pivot = arr[lb]
    let start = lb
    let end = up
    while (start < end) {
        while (arr[start] <= pivot) start++
        while (arr[end] > pivot) end--
        if (start < end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
    }
    let temp = arr[lb]
    arr[lb] = arr[end]
    arr[end] = temp
    return end
}

console.log(quickSort([5, 3, 2, 12, 3, 2, 1]))


//! quick sort in js methods
function quickSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) return arr;

    // Choose the pivot (we'll use the last element here)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    // Partition the array into left and right
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right partitions, then combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let arr = [5, 3, 8, 4, 2, 7, 1];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 7, 8]
