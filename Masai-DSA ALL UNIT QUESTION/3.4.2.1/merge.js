// Merge Sorting 
// Description
// You are given N numbers. Your task is to write MERGE SORT sorting algorithm 
// (from scratch) to sort those N numbers.

// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION

// Input
// Input Format:
// First line of input contains N
// Next line contains N space separated integers.

// Constraints:
// N < 1000000

// Output
// Output the sorted form of provided numbers

// Sample Input 1 
// 5
// 3 5 0 9 8

// Sample Output 1
// 0 3 5 8 9


function Merge(left,right){
    let l=0;
    let r=0;
    let mergeArr=[]
    while(l<left.length && r<right.length){
        if(left[l]<right[r]){
            mergeArr.push(left[l])
            l++
        }else{
            mergeArr.push(right[r])
            r++
        }
    }
    while(l<left.length){
        mergeArr.push(left[l])
        l++
    }
    while(r<right[r]){
        mergeArr.push(right[r])
            r++
    }
    return mergeArr
}

function mergeSort(arr){
    if(arr.length==1){
        return arr
    }
   
    let mid=parseInt(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid))
    return Merge(left,right)
   
}


let arr=[14,89,64,56,32,90,52,12];

console.log(mergeSort(arr).join(" "))

