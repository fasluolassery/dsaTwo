//! sample hash table
// class HashTable{
//     constructor(size) {
//         this.table = []
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key) {
//         let index = this.hash(key)
//         return console.log(this.table[index])
//     }

//     remove(key) {
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display() {
//         if (!this.table.length) return 'list is empty'
//         for (let i = 0; i < this.table.length; i++){
//             if (this.table[i]) {
//                 console.log( this.table[i])
//             }
//         }
//     }
// }

//! hash table with collision
class HashTable{
    constructor(size) {
        this.table = []
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        // this.table[index] = value
        let bucket = this.table[index]
        
        if (!bucket) {
            this.table[index] = [[key,value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }

    get(key) {
        let index = this.hash(key)
        // return console.log(this.table[index])
        let bucket = this.table[index]

        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) return sameKeyItem[1]
        }

        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        // this.table[index] = undefined
        let bucket = this.table[index]

        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        if (!this.table.length) return 'list is empty'
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log( this.table[i])
            }
        }
    }
}

let t = new HashTable(10)
t.set('name','batman')
t.set('mane', 'hello')
t.set('age', 28)
t.get('age')
// t.set('age', 28)
// t.display()
// console.log(t)