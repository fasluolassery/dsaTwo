function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

let a = [7, 4, 10, 8, 3, 1]
console.log(selectionSort(a))