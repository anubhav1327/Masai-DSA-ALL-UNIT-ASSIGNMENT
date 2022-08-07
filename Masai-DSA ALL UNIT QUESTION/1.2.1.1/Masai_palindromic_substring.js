// Masai Palindromic Substring 
// Description
// You are provided a string S.
// Write a program that returns length of the longest palindromic substring of that string.

// Input
// Input Format
// First line contains S, a string.

// Constraints
// `1 <= Length of string <= 100

// Output
// Output Format
// Output one number which is length of the longest substring which is a palindrome

// Sample Input 1 
// thisracecarisgood

// Sample Output 1
// 7

// Hint
// Sample 1 Explanation
// The given string contains a palindromic substring which is, "racecar" and it is of 
// largest length(7) among all other palindromic substrings.
// Hence the output is 7


 



function longest(str){
    var Arr=[],mx=0
    for(var i=0;i<str.length;i++){
        var s=""
        
        for(var j=i;j<str.length;j++){
            s+=str[j]
        
        var s1=""
            for(var k=s.length-1;k>=0;k--){
                s1+=s[k]
}
                if(s1==s){
                   Arr.push(s)
                }
            }
        
            
        }
 for(var p = 0;p<Arr.length;p++){
    if(mx < Arr[p].length){
        mx = Arr[p].length
    }
}
console.log(mx)


 }
   
        
var str="naman"
longest(str)


// function longest(str){
//     var len=str.length;
//     var maxlen=1,start=0;
//     for(var i=0;i<len;i++){
//         for(var j=i;j<len;j++){
//             var flag=1
//             for(var k=0;k<(j-i+1)/2;k++){
//                 if(str[i+k]!=str[j-k])
//                 flag=0
//             }
//             if(flag&&(j-i+1)>maxlen){
//                 start=i
//                 maxlen=j-i+1
//             }
//         }
//     }
//     console.log(maxlen)

// }
// var str="thisracecarisgood"

// longest(str)

