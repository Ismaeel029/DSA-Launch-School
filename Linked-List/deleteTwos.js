"use strict"

// Given the head of a linked list, remove all
// occurrences of the value 2 from the linked list.

// Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
// Output: 1 -> 3 -> 4 -> null

// Input:  2 -> 3 -> 2 -> null
// Output: 3 -> null

// Input:  null
// Output: null

// Linked list node class
class ListNode {
    constructor(val = 0, next=null){
        this.val = val; //value of the node
        this.next = next;   //pointer to next node in the list
    }
}

// Test Case 1: 1->2->3->2->4->null;
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(4);

// Case 2: 2 -> 3 -> 2 -> null
const head2 = new ListNode(2);
head2.next = new ListNode(3);
head2.next.next = new ListNode(2);

// Case 3: null
const head3 = new ListNode();

function deleteTwos(head){
    let prev = null;
    let curr = head;

    if(!head) return head;

    while(curr){
        if(curr.val === 2){
            if(!prev){ // check if we are on the head
                head = curr.next; // reasign the head to delete 2
            }else{
                prev.next = curr.next;
            }
        }else{
            prev = curr;
        }
        curr = curr.next;
    } //end while loop
    return head;
}


// Helper function to format the linked list into a string
function stringifyList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

console.log("Input: ", stringifyList(head1));
console.log("Output:", stringifyList(deleteTwosDummy(head1)));

console.log("Input: ", stringifyList(head2));
console.log("Output:", stringifyList(deleteTwos(head2)));

console.log("Input: ", stringifyList(head3));
console.log("Output:", stringifyList(deleteTwos(head3)));


//USING DUMMY NODES
function deleteTwosDummy(head){
    const dummy = new ListNode(); // create a dummy node
    dummy.next = head; // assign its next to head. we have a dummy b4 head
    let prev = dummy; //prev no longer null. prev.next points to head
    let curr = head;
    if(!head) return head;

    while(curr){
        if(curr.val === 2){
            prev.next = curr.next; // remove the node with val=2, link its previous to next node 
        }else{
            prev = curr;
        }
        curr = curr.next; //move on to the next node
    }
    return head;
}