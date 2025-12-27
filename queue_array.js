"use strict"

/*
Implement a queue using an array
=> FIFO - First In First out
=>enqueue, dequeue, peek, isEmpty
*/

class Queue{
    constructor(){
        this.elements = [];
    }
    enqueue(value){
        this.elements.push(value);
    }

    dequeue(){
        if(this.isEmpty()) return 'Empty queue';
        return this.elements.shift();
    }

    peek(){
        return this.elements[0];
    }

    isEmpty(){
        if(this.elements.length === 0) return true;
        return false;
    }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
console.log('Dequeue ' + myQueue.dequeue());

console.log(myQueue.peek());
console.log(myQueue.isEmpty());