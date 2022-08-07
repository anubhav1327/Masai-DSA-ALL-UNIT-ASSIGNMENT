
// Description

// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order

// DO NOT USE ANY BUILTIN FUNCTION TO SORT

// ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM


// Input
// Input Format

// First line contains N

// Second line contains N space separated integers

// Constraints

// N < 1000


// Output
// Output Format

// Print the sorted numbers separated by space


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9
// Hint

// Sample 1 Explanation

// Expected test case ;)

function Quick(arr,l,r){
    
    let i=l;
    let pivot=arr[r]
    for(var j=l;j<=r;j++){
        if(arr[j]<pivot){
        let temp=arr[j];
        arr[j]=arr[i]
        arr[i]=temp
        i++

    }
}
temp=arr[i];
arr[i]=arr[r]
arr[r]=temp
return i

}
function random_pivot(arr, l, r) {
let piv_pos = l + parseInt((Math.random() * 10000000) % (r - l))

let temp = arr[piv_pos]
arr[piv_pos] = arr[r]
arr[r] = temp

return Quick(arr, l, r)
}

function QuickSort(arr,l,r){
if(l<r){
let p=random_pivot(arr, l, r)
QuickSort(arr,l,p-1)
QuickSort(arr,p+1,r)
}

}

arr=[90,78,54,43,23,89,76,66]
QuickSort(arr,0,arr.length-1)
console.log(arr.join(" "))

