class HashTable{
    constructor(size = 50) {
        this.table = []
        this.size = size
    }

    hash(key) {
        let index = 0
        for (let i = 0; i < key.length; i++){
            index += key.charCodeAt(i)
        }
        return index % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, valu]]
        } else {
            let same = bucket.find(item => item[0] === key)
            if (same) same[1] = value
            else bucket.push([key, value])
        }
    }

    get(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let same = bucket.find(item => item[0] === key)
            if (same) return same[1]
        }
    }
}