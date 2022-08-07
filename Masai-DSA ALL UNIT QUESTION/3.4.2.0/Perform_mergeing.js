
// Perform Merging -8:47:47
// Description

// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code


// Input
// Input Format :

// First line contains N which is the number of integers present in both the arrays.

// Second line contains N sorted integers which are elements of first array.

// Third line contains N sorted integers which are elements of second array.



// Constraints :

// N < 1000


// Output
// Output the array formed after merging elements such that it is sorted


// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9

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
let left=[1,24,51,67,89]
let right=[2, 5, 8,90,123]
console.log(Merge(left,right).join(" "))

