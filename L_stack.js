//! stack using array
class Stack1{
    constructor() {
        this.items = []
    }

    isEmpty() { return this.items.length === 0 }
    
    size() { return this.items.length }
    
    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty()) return 'stack is empty'
        this.items.pop()
    }

    print() {
        if (this.isEmpty()) return 'stack is empty'
        for (let i = this.items.length - 1; i >= 0; i--){
            console.log(this.items[i])
        }
    }

    peek() {
        if (this.isEmpty()) return 'stack is empty'
        return this.items[this.items.length-1]
    }
}

// let stack = new Stack()

//! stack using linked list
class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    push(value) {
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    pop() {
        if (!this.head) return 'stack is empty'
        this.head = this.head.next
        this.size--
    }
}

class Stack{
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
        if (!this.items.head) return 'stack is empty'
        let curr = this.items.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }

    peek() {
        if (!this.items.head) return 'stack is empty'
        return this.items.head.value
    }
}

let stackLL = new Stack()
stackLL.push(1)
stackLL.push(2)
stackLL.push(3)
stackLL.print()