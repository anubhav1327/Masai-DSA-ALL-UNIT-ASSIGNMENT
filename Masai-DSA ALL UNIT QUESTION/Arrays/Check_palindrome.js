// Check Palindrome 
// Description
// You are given a string, whose size is stored in a variable with the name N
// The string is stored in a variable with the name str
// Print Yes, if the string is a palindrome, else print No

// For example, consider the value stored instr = "naman", if we reverse the string, 
// the reversed string will be the same as the original string, hence the string is
//  considered as palindrome, therefore, the output isYes

// Note : A palindrome is a string which is the same read forwards or backwards


// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored instr


// Output
// PrintYes, if the string stored instris a palindrome, else printNo

// Sample Input 1 

// 6
// nrupul
// Sample Output 1

// No
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "nrupul"

// In this case, the reversed string is not equal to the original string, therefore, the output isno
var s=""
var str="naman"
// for(var i=str.length-1;i>=0;i--){
//     s+=str[i]
// }
// if(s==str){
//     console.log("Yes")
// }else{
//     console.log("No")
// }
var a=str.split("")
var p=a.reverse().join("")
if(p==str){
    console.log("Yes")
}else{
    console.log("No")
}