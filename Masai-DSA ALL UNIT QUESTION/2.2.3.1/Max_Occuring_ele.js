// Maximum Occurring Element 
// Description
// Given an array A of N integers. Your task is to print that integer which presents
//  maximum number of times in the given array.
// If there are two elements present the maximum number of times, print the one which
//  comes first in the array.

// Input
// Input Format
// First line contains N
// The second line contains N integers separated by spaces.

// Constraints
// N < 100
// The array contains integers only

// Output
// Print one integer, the one which is present the maximum number of times.

// Sample Input 1 
// 5
// 0 2 0 6 9
// Sample Output 1

// 0
// Hint

// Sample 1 Explanation

// Since 0 is present the maximum number of times (2 times) => The answer is 0

var obj={},mx=0,val;
var arr=[0,2,0,6,6,9,9,9]
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]++
    }
    if(obj[arr[i]]>mx){
        mx=obj[arr[i]]
        val=arr[i]
    }
}
console.log(val)

