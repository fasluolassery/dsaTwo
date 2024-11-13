function bubblesort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        let flag = 0
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = 1
            }
        }
        if (!flag) break
    }
    return arr
}

let arr =[8, 4, 3, 7, 6, 5, 2, 1]
console.log(bubblesort(arr))
