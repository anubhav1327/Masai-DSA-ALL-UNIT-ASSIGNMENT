// Decompress the String 
// Description
// Given a string of lowercase characters and integers, decompress the string under the 
// following rules:
// If an integer is encountered, the character just before it gets added to a final string 
// as many times as the number
// For instance, if the string is a3b2=> the output should be aaabb because a is followed by
//  3, and bis followed by 2

// Complete the function to decompresses the string and print it.
// Input
// Input Format
// Input contains one string

// Constraints
// 1 <= Length of S <= 100

// Output
// Output the decompressed string

// Sample Input 1 
// a3b2

// Sample Output 1
// aaabb

// Hint
// As explained in description.

// function decompress(str){
//     let st=""
//     let lower="abcdefghijklmnopqrstuvwxyz"
//     for(var i=0;i<str.length;i++){
//         for(var j=0;j<26;j++){
//             if(str[i]==lower[j]){
//                 st+=str[i]
//                 break;
//             }
//             }
//                 for(var k=1;k<str[i];k++){
//                     st+=str[i-1]
                
//             }
//         }
    
//     console.log(st)

// }

// decompress("ab2c6")


function solve(str){
    let st=""
    for(var i=0;i<str.length;i++){
        if(str[i]%1==0){
            for(var j=1;j<str[i];j++){
                st+=str[i-1]
            }
        }else{
            st+=str[i]
        }
    }
    console.log(st)
}

solve("ab2c5")