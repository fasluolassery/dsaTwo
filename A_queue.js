class Queue{
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.unshift(value)
    }

    pop() {
        if (!this.items.length) return -1
        return this.items.pop()
    }

    print() {
        if (!this.items.length) return -1
        for (let i = this.items.length - 1; i >= 0; i--){
            console.log(this.items[i])
        }
    }
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.pop()
// queue.print()        
//!-------------------------------

class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    push(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    pop() {
        if (!this.head) return -1
        this.head = this.head.next
    }

}

class QueueWLL{
    constructor() {
        this.items = new linkedList()
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        this.items.pop()
    }

    print() {
        if (!this.items.head) return 'list is empty'
        let curr = this.items.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }
}

let queueWLL = new QueueWLL()
queueWLL.push(1)
queueWLL.push(2)
queueWLL.push(3)
queueWLL.pop()
queueWLL.print()