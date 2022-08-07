
// Description

// Given a list of n integers. Write a program for merge sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm


// Input
// First line contains n which is the number of elements present in the array
// Second line contains n space-separated integers

// Output
// Output the elements present in the array sorted in descending order

// Sample Input 1 
// 5
// 2 3 1 4 5
// Sample Output 1

// 5 4 3 2 1



function Merge(left,right){
    let l=0;
    let r=0;
    let MergeArr=[]
    while(l<left.length && r<right.length){
        if(left[l]>right[r]){
            MergeArr.push(left[l])
            l++
        }else{
            MergeArr.push(right[r])
            r++
        }
    }
    while(l<left.length){
        
            MergeArr.push(left[l])
            l++
    }
    while( r<right.length){
       
            MergeArr.push(right[r])
            r++
    }
    return MergeArr
}


function MergeSort(arr){
    if(arr.length==1){
        return arr
    }
   let mid=parseInt(arr.length/2)
   let left=MergeSort(arr.slice(0,mid))
   let right=MergeSort(arr.slice(mid));
   return Merge(left,right)
}


let arr=[78,90,53,178,67,92,45,62]
console.log(MergeSort(arr).join(" "))