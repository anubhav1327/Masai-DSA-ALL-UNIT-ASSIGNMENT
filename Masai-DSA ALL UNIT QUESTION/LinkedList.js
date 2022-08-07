
class LinkedList{
    constructor(val){
        this.data=val;
        this.next=null
    }
};
let head=null
function insert_At_big(val){
    let newNode=new LinkedList(val);
    newNode.next=head;
    head=newNode
   
}

function insert_At_end(val){
    let newNode=new LinkedList(val);
    let cur=head
    if(head==null){
        newNode.next=head
        head=newNode
    }else{
        while(cur.next!=null){
            cur=cur.next
        }
            cur.next=newNode;
    }
}

function insert_At_pos(position,val){
    let newNode=new LinkedList(val);
    if(position==0){
        newNode.next=head
        head=newNode
    }else{
       let i=1
       let cur=head
        while(i<position){
          cur=cur.next
          i++
        }
        newNode.next=cur.next;
        cur.next=newNode
    }
    
}

function Return_mid(){
    if(head.next==null){
       console.log(head.data)
    }
    let slow=head
    let fast=head;
    while(fast!=null&& fast.next!=null){
        slow=slow.next
        fast=fast.next.next
    }
    console.log(slow.data)
}
function printLL(){
    let cur=head;
    while(cur!=null){
     console.log(cur.data)
     cur=cur.next
    }
}

insert_At_big(89)
insert_At_big(9)
insert_At_big(8)
insert_At_big(76)
insert_At_big(98)
insert_At_big(87)
printLL()
console.log()
insert_At_end(99)
insert_At_end(17)
insert_At_end(27)
printLL()
console.log()
insert_At_pos(2,68)
printLL()
console.log()
Return_mid()
// printLL()






































// class LinkedList {
//     constructor(val){
//         this.data=val;
//         this.next=null;

//     }
// }
// let head=null

//    function insert_At_big(val){
//         let new_node=new LinkedList(val)
//         new_node.next=head
//         head=new_node
//     }

//     function insert_At_end(val){
//         let new_node=new LinkedList(val)
//         let cur=head
//         if(head==null){
//             new_node.next=head;
//             head=new_node
//         }
//         else if(cur!=null){
//             cur=cur.next

//         }
//         cur.next=new_node
//     }
//     function  print(){
//         let cur=head;
//           while(cur!=null){
//               console.log(cur.data)
//               cur=cur.next
//           }
   
//        }

// // insert_At_big(8)
// // insert_At_big(80)
// // insert_At_big(68)
// print()
// insert_At_end(999)
// print()
