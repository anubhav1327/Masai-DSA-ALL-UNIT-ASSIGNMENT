// Subarray and Sum 
// Description
// Given an array of integers of length n and a positive integer K, the task is to find
//  the count of the longest possible subarrays with the sum of its elements not 
// divisible by K.

// Input
// Input Format
// First line contains n and k separated by space
// Second line contains strings of length n.

// Constraints
// 1 <= n <=10^6
// 1 <= k <= 100

// Output
// Print count of sub arrays.

// Sample Input 1 

// 4 3
// 2 3 4 6
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

// There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13,
//  which is not divisible by K = 3.



// function solve(arr,k,n){

// var s=0
// for(var i=0;i<arr.length;i++){
//     s+=arr[i];
// }
// if(s%k!=0){
//     console.log("1");
// }
//    else {
//     var l = -1, r = -1;
//     for (var i = 0; i < n; i++) {
//         if (arr[i] % k != 0) {
//             l = i;
//             break;
//         }
//     }
//     for (var i = n - 1; i >= 0; i--) {
//         if (arr[i] % k != 0) {
//             r = i;
//             break;
//         }
//     }
//     if (l == -1) {
//         console.log("-1");
//     }
//     else {
//         var len = Math.max(n - 1 - l, r);
//         var s = 0, count = 0;
//         for (var i = 0; i < len; i++) s +=arr[i];
//         if (s % k != 0) count++;
//         for (var i = len; i < n; i++) {
//             s += arr[i];
//             s -= arr[i - len];
//             if (s % k != 0) count++;
//         }
//         console.log(count);
//     }
// }
// }
// let arr=[2,3,4,6]
// solve(arr,3,4)



function solve(size,sum,arr){
    let i,s=0;
    for(i=0;i<size;i++){
        s+=arr[i]
    }
    if((s%sum)!=0){
        return 1
    }else{
        let start=0;
        while(start<size && arr[start]%sum==0){
               start++
        }
        let end=size-1;
        while(end>=0 && arr[end]%sum==0){
            end--
        }
        let len,wsum=0,count=0;
        if(start==size){
            return -1
        }else{
            len=Math.max(size-1-start,end);
        }
        for(i=0;i<len;i++){
            wsum+=arr[i]
        }if(wsum%sum!=0){
            count++
        }
        for(i=len;i<size;i++){
            wsum+=arr[i];
            wsum-=arr[i-len]
            if(wsum%sum!=0){
                count++
            }
        }
        return count;
    }
}

let arr=[2,3,4,5],size=4,sum=3;
console.log(solve(size,sum,arr));

