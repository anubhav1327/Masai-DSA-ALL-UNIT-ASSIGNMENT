// Length & Recursion
// Description

// Given a string, S. Find the length of the string using recursion.

// Note: You are not allowed to use the length built-in property.


// Input
// Input Format

// The single line  consists of string S

// Constraints

// 1<= S length <= 200


// Output
// Print length of the given string S.


// Sample Input 1 

// masaischool
// Sample Output 1

// 11


function recur(str,i){
    if(i>=str.length){
        return i
    }
    return recur(str,i+1);
}
let str="masail";
console.log(recur(str,0))