// Substring under condition 
// Description

// You are given a strings, you have to find the count of all such substrings which 
// start and ends with the same character.

// Input
// Input Format :

// First and the only line contains a strings

// Constraints:
// 1 <= Length of s <= 1000

// Output
// Print the count of total number of such substrings starting and ending with same
//  characters.

// Sample Input 1 

// abcab
// Sample Output 1

// 7
// Hint

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.

// function solve(str){
//     let count=0
//     for(var i=0;i<str.length;i++){
//         let s=""
//         for(var j=i;j<str.length;j++){
//             s+=str[j]
//                 if(s[0]==s[s.length-1]){
//                     count++
//                 }
//         }
//     }
//     console.log(count)

// }

// solve("abcb")



// function solve(str){
//     var count=0;
//     for(var i=0;i<str.length;i++){
//         for(var j=i;j<str.length;j++){
//             if(str.charAt(i)==str.charAt(j)){
//                 count++
//             }
//         }
//     }
//     console.log(count)
// }

// solve("abcd")


function recur(str){
   
    if(str.length==1){
          console.log(str);
        
        return;
    }else{
         console.log(str);
        
            recur(str.substr(0,str.length-1))
           recur(str.substr(1,str.length))
    }
    
}
recur("abcd")