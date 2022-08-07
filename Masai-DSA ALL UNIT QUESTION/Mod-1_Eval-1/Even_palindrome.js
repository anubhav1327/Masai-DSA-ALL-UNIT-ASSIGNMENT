// Even Palindrome 
// Description

// You are given a string stored in a variable with the name str, and the size of the string is 
// stored in a variable with the name N

// You have to create another string from the given string, such that the characters present at
//  only the even indexes are considered, in the same order as they are present in str

// If the new string formed by using the characters present at even positions in the string str, 
// is a palindrome, print yes, else print no

// For example, consider the value stored in N = 7, and the value stored instr = abcdcfa. 
// Therefore, the characters present at even positions area,c,c,a. Therefore, the new string
//  formedaccais a palindrome. Hence, the output becomesyes

// Note : The string contains only smaller case English alphabets. Also, the indexing in the 
// string starts from 0


// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored instr


// Output
// Print the output as per the condition, as mentioned in the problem statement

// Sample Input 1 

// 7
// abcdcfa
// Sample Output 1

// yes
// Hint

// In the sample test case, the value stored inN = 7, and the value stored instr = abcdcfa. Therefore, the characters present at even positions area,c,c,a. Therefore, the new string formedaccais a palindrome. Hence, the output becomesyes

function solve(str){
    let s="",st=""
    for(var i=0;i<str.length;i++){
        if(i%2==0){
            s+=str[i];
        }
    }
    for(var j=s.length-1;j>=0;j--){
        st+=s[j]
    }
    if(st==s){
        console.log("yes")
    }else{
        console.log("no")
    }

}
solve("abcdcfa")