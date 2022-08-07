// String value! 
// Description
// Given a string S of all lowercase letters and each letter has a value of its own.
// The value of the alphabet a is 1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string
//  is the sum of values of all characters present in string.

// Input
// Input Format
// The first and only line of input contains the StringS.

// Constraints
// 1 <= Length of S <= 1000

// Output
// Print the value of string.

// Sample Input 1 
// aba
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// For example, Consider the Stringaba

// Here, the first characterahas a weight of1, the second characterbhas2and the third 
// characteraagain has a weight of1.

// So the sum of stringabahere is equal to : 1 + 2 + 1 = 4.

// function solve(str){
//     let lower="abcdefghijklmnopqrstuvwxyz";
//     let sum=0
//     for(var i=0;i<str.length;i++){
//         for(var j=0;j<26;j++){
           
//             if(str[i]==lower[j]){
//                 sum+=(j+1)
//                 break
//             }
//         }
//     }
//     console.log(sum)
// }

// solve("aba")


// function solve(str){
//     let lower="abcdefghijklmnopqrstuvwxyz";
//     var obj={};
//     let sum=0
//     for(var i=0;i<str.length;i++){
//         if(obj[str[i]]=="undefined"){
//             obj[str[i]]=1
//         }else{
//             obj[str[i]]++
//         }
//     }

//          for(var j=0;j<26;j++){
//              if(obj[lower[j]]){
//                  sum+=j+1
//              }
//             }
//             console.log(sum)

// }
// solve("aba")




function solve(str){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let sum=0;
    for(var i=0;i<str.length;i++){
        for(var j=0;j<26;j++){
            if(str[i]==lower[j]){
                sum+=j+1;
                break;
            }
        }
    }
    console.log(sum)
}
solve("ababba")