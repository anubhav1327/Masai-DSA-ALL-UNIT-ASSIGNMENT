var addTwoNumbers = function (l1, l2) {
    let cur1=l1
    let cur2=l2
    let l3=new ListNode(0)
    let cur3=l3
    let carry=0
    while(cur1!=null || cur2!=null){
        let digit=carry
        if(cur1!=null){
            digit+=cur1.val
            cur1=cur1.next
        }
        if(cur2!=null){
            digit+=cur2.val
            cur2=cur2.next
        }
        if(digit>9){
            carry=Math.floor(digit/10)
        }else{
            carry=0
        }
        cur3.next=new ListNode(digit%10)
        cur3=cur3.next
    }
    return l3.next
};
