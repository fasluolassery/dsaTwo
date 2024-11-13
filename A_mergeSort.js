//! merge sort normal algo
function mergeSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2)
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    }
    return arr
}

function merge(arr, left, mid, right) {
    let i = left
    let j = mid + 1
    let k = left
    let b = []
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            b[k] = arr[i]
            i++
            k++
        } else {
            b[k] = arr[j]
            j++
            k++
        }
    }

    if (i > mid) {
        while (j <= right) {
            b[k] = arr[j]
            j++
            k++
        }
    } else {
        while (i <= mid) {
            b[k] = arr[i]
            i++
            k++
        }
    }

    for (let m = left; m <= right; m++){
        arr[m] = b[m]
    }
}

console.log(mergeSort([7, 4, 10, 8, 3, 1]))

//! merge sort in js methods
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


//! 2nd example
let a = [38, 27, 43, 82, 10] 
let b = [5, 2, 9, 1, 5, 6]
let c = [4, 3, 7, 8, 1, 5]

function mergeSort(arr) {
    if (arr.length < 2) return arr
    
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++])
        else result.push(right[j++])
    }

    return result.concat(left.slice(i), right.slice(j))
}

console.log(mergeSort(a))
console.log(mergeSort(b))
console.log(mergeSort(c))


//! code evalution quick sort
function codeE(arr) {
    if (arr.length < 2) return arr
    
    let mid = Math.floor(arr.length / 2)

    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    merge(codeE(left), codeE(right))
}

function merge(left, right){
    let res = []

    while (left.length && right.length) {
        if (left[0] < right[0]) res.push(left.shift())
        else res.push(right.shift())
    }

    return [...res, ...left, ...right]
}



console.log(mergeSort(a))
