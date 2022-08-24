// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.nextNode = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.nextNode = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  size() {
    return this.length
  }

  head() {
    return this.head
  }

  tail() {
    return this.tail
  }

  at(index) {
    if (index < 0 || index >= this.length) return null
    let currentNode = this.head

    if (index === 0) return currentNode

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  pop() {
    if (this.length === 0) return

    let currentNode = this.head
    let newTail = currentNode
    while (currentNode.nextNode) {
      newTail = currentNode
      currentNode = currentNode.nextNode
    }

    this.tail = newTail
    this.tail.nextNode = null
    this.length--

    return currentNode
  }

  contains(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) return true

      currentNode = currentNode.nextNode
    }

    return false
  }

  find(value) {
    for (let index = 0; index < this.length; index++) {
      if (this.at(index).value === value) return index
    }

    return null
  }
}

const list = new LinkedList()

list.append(34)
list.append(65)
list.append(34)
list.append(65)
list.append(99)
list.append(111)
list.append(99)
list.append(111)
list.prepend(10)

list.pop()
list.pop()

console.log(list.find(65)) // 2
console.log(list.at(5)) // Node { value: 99, nextNode: Node { value: 111, nextNode: null } }
console.log(list.contains(99)) //true
console.log(list.contains(75)) //false
console.log(list)
