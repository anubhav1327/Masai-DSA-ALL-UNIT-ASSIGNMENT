// Merge two Linked Lists 
// Description

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Complete the function below and return the head of the new linked list.


// Input
// This is a function complete problem

// To get a understanding of the input-

// The first line contains the number of nodes in the first linked list (n1)

// Next n1 lines contains the nodes of the first linked list

// Next line contains the number of nodes in the second linked list (n2)

// Next n2 lines contains the nodes of the second linked list

// n1, n2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 1
// 2
// 4
// 2
// 3
// 4
// 5
// Sample Output 1

// 1 1 2 2 3 4 5

// class Node(){
//     constructor(data){
//         this.val=data;
//         this.next=null;
//     }
// }
function merge(l1,l2){
  let newNode=new Node(0)
  let head=newList;
  while(l1!=null && l2!=null){
      if(l1.val<l2.val){
        let newNode=new ListNode(l1.val)
        newList.next=newNode
        newList=newNode
        l1=l1.next
      }else{
        let newNode=new ListNode(l2.val)
        newList.next=newNode
        newList=newNode
        l2=l2.next
      }
  }
  while(l1!=null){
    let newNode=new ListNode(l1.val)
        newList.next=newNode
        newList=newNode
        l1=l1.next
    
}
while(l2!=null){
    let newNode=new ListNode(l2.val)
        newList.next=newNode
        newList=newNode
        l2=l2.next
}
head=head.next
return head
}