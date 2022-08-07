// Substring under condition 
// Description

// You are given a strings, you have to find thecountof all such substrings which start 
// and ends with the same character.

// Input
// Input Format :

// First and the only line contains a strings

// Constraints:
// 1 <= Length of s <= 1000

// Output
// Print the count of total number of such substrings starting and ending with same characters.

// Sample Input 1 

// abcab
// Sample Output 1

// 7
// Hint

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.

// let count=0,arr="abcab"
// for(let i=0;i<arr.length;i++){
//     s=""
//     for(let j=i;j<arr.length;j++){
//         s+=arr[j];
//         if(s[0]==s[s.length-1]){
//             count++;
//         }
//     }
// }
// console.log(count)

function solve(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        for(var j=i;j<str.length;j++){
     if(str[i]==str[j]){
       count++
    }
}
}
console.log(count)
}

solve("abcab")
