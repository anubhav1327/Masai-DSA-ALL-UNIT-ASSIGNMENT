// Even Count Returns 
// Description
// You have a string S and its starting index is 1. The string S consists of characters from 1-9.
//  You are asked to count the number of even numbered characters ( i.e 2,4,6,8) for every index i .
// For an index i, the result should be calculated from i to the end of the string.

// Input
// Input Format:

// First line contains a string S.

// Constraints:

// Length of string S <= 10000

// Output
// Print space-separated integers,the result of every index.

// Sample Input 1 

// 574674546476
// Sample Output 1

// 7 7 7 6 5 5 4 4 3 2 1 1

// function solve(str){
//     var sum=""
//     for(var i=0;i<str.length;i++){
//         let count=0
//         for(var j=i;j<str.length;j++){
//        if(str[j]%2==0){
//            count++;
//        }
//     }
//     sum+=count+" "
//     }
//     console.log(sum);
// }

// solve("574674546476");