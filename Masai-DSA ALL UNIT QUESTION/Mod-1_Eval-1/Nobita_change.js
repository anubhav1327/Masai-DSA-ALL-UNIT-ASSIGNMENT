// Nobita and Change 2 
// Description
// Nobita & Doraemon both are given a number N (length of the string) and a string, the string 
// contain both Lowercase and Uppercase English Alphabet characters , convert
// all lowercase characters into Uppercase then output the entire string.
// e.g. "abAbC"  should be changed to "ABABC"

// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string.

// Second line of input contains the string.

// Constraints:
// 1<=N<=1000

// Output
// Output the string after changing the lowercase characters into uppercase.


// Sample Input 1 

// 5
// abAbC
// Sample Output 1

// ABABC


function solve(str){
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let st=""
    for(var i=0;i<str.length;i++){
        
        for(var j=0;j<26;j++){
            if(lower[j]==str[i]){
                st+=upper[j];
                break;
            }
        }
                st+=str[i];
            
        }
    
    console.log(st)
}
solve("abABcd")