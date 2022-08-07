// Verify Pal or Not 
// Description
// You are given two strings stored in variables str1 and str2 respectively

// The length of both the strings is same, and stored in a variable with the name N

// You have to create a new string out of the two strings such that the new string is the 
// concatenated string of str1 and str2

// Therefore,new_string=str1+str2

// Ifnew_stringis a palindrome, printyes, else printno

// For example, consider the value stored inN = 3, andstr1 = abc, andstr2 = cba. Then, the value stored innew_string = abccba, which is a palindrome. Therefore, the output isyes

// Note : Both the strings contain only lowercase English Alphabets

// Input
// The first line contains the value stored inN

// The second line contains the value stored instr1

// The third line contains the value stored instr2


// Output
// Printyesorno, based on the conditions as mentioned in the problem statement

// Sample Input 1 

// 3
// abc
// def
// Sample Output 1

// no
// Sample Input 2 

// 4
// abba
// abba
// Sample Output 2

// yes
// Hint

// In the first sample test case, the value stored inN = 3, andstr1 = abc,str2 = def. \
// The new concatenated string,new_string = abcdef, which is not a palindrome. Therefore, 
// the output is no

// In the second sample test case, the value stored inN = 4, andstr1 = abba,str2 = abba. The new concatenated string,new_string = abbaabba, is a palindrome. Therefore, the output isyes

function solve(str1,str2){
    let new_str=str1+str2;
   
    let new_pal=""
    for(var i=new_str.length-1;i>=0;i--){
        new_pal+=new_str[i];
    }
    if(new_str==new_pal){
        console.log("yes")
    }else{
        console.log("no")
    }
}
solve("abba","abba");