class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let currNode = this.tail;
    currNode.next = { value: value, next: null, previous: this.tail };
    this.tail = currNode.next;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    let nodeToInsert = {
      value: value,
      next: this.head,
      previous: null
    };
    this.head = nodeToInsert;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let prevNode = this.head;
    let nodeToInsert = {
      value: value,
      next: null,
      previous: null
    };
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    nodeToInsert.next = prevNode.next;
    nodeToInsert.previous = prevNode;
    prevNode.next.previous = nodeToInsert;
    prevNode.next = nodeToInsert;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index >= this.length) return this.printList();
    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    let nextNode = prevNode.next;
    prevNode.next = nextNode.next;
    prevNode.next.previous = prevNode;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.prepend(3);
myLinkedList.prepend(2);
myLinkedList.prepend(1);

myLinkedList.insert(2, 10);
myLinkedList.insert(4, 11);

myLinkedList.remove(2);
myLinkedList.remove(3);
myLinkedList.remove(12);
