// Nobita and Random 
// Description

// Nobita & Doraemon both are given a number N (length of the string) and a string, you need
//  to tell whether the following pattern exist in the string or not. The pattern can be present 
// at any place in the string. Output Yes if the pattern is present in the string and No if it 
// is not present. The pattern needs to be continuous in the string.

// Pattern :@#$

// Note: The input string may contain lowercase alphabet and these pattern elements characters 
// like @, #, $

// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string.

// Second line of input contains the string.

// Constraints:
// 1<=N<=1000

// Output
// Output "Yes" or "No" without quotes

// Sample Input 1 

// 5
// ab@#$
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// ab@cd
// Sample Output 2

// No
// Sample Input 3 

// 6
// a@b#$c
// Sample Output 3

// No

function solve(str){
    if(str.includes("@#$")){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

solve("a@#$c")