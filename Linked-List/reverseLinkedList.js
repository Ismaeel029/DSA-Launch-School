"use strict"

// Given the head of a linked list, reverse the list and return it.

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

// Linked list node class
class ListNode {
    constructor(val = 0, next=null){
        this.val = val; //value of the node
        this.next = next;   //pointer to next node in the list
    }
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

function reverseLinkedList(head){
    let prev = null;
    let curr = head;

    if(!head) return prev;

    while(curr){
        let nextnode = curr.next;
        curr.next = prev; // to reverse the list, point to the list before it
        prev = curr; // slide prev to current node for next run
        curr = nextnode; // slide curr node forward to continue
    }
    return prev;
}

console.log(reverseLinkedList(head1));