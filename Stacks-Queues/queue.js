"use strict";

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  peek() {
    // If the queue is empty, it returns `null`.
    // Returns the value of the top most element without removing it.
    return this.front ? this.front.val : null;
  }

  enqueue(value) {
    // Adds an item to the queue
    const node = new ListNode(value);
    if(!this.front){
        this.front = node;
        this.back = node;
    }else{
        this.back.next = node;
        this.back = node;
    }
  }

  dequeue() {
    // If the queue is empty, it returns `null`.
    if(!this.front) return null;

    // Removes the item from the queue and returns it
    let dequeued = this.front;
    this.front = this.front.next; //move to the next node in queue
    if(!this.front){    // if the next node is null
        this.back = null; // no new node in queue
    }
    return dequeued;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(2);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(3);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
myQueue.dequeue();
console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'