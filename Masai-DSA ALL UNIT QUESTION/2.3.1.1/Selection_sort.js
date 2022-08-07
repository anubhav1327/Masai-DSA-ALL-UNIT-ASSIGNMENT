// Selection Sort Problem 
// Description
// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT 
// such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

// Input
// Input Format:
// First line of input contains 
// Second line of input contains N numbers

// Constraints:
// N < 500

// Output
// Output the numbers given after sorting it in increasing order

// Sample Input 1 
// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function solve(arr){
for(var i=0;i<arr.length-1;i++){
    let min=i;
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    let temp=arr[min]
     arr[min]=arr[i]
    arr[i]=temp
}
console.log(arr.join(" "))
}

let arr=[3,5,0,9,8]
solve(arr)