// Detect Palindrome 
// Description

// You are given a integer num.
// You need to print Yes if that integer is a palindrome or else print No.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the
//  same backward as forward, such asmadamorracecar.

// Input
// Input Format
// First line contains num, a integer.

// Constraints
// 1 <= num <= 1000000

// Output
// Print Yes or No depending upon the integer.

// Sample Input 1 

// 1221
// Sample Output 1

// Yes
// Hint

// Sample 1 Explanation

// We print Yes as 1221`is a palindrome.

// function palindrome(num){
//     let str=num.toString();
//     let s=""
//     for(let i=str.length-1;i>=0;i--){
//         s+=str[i]
//     }
//     if(str==s){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }
// var num=1221
// palindrome(num)

// function palindrome(str){
//     let l=0;
//     let h=str.length-1
//     while(l<=h){
//         if(str[l]!=str[h]){
//             console.log("No")
//             return 
//         }
//         l++
//         h--
//     }
//     console.log("Yes")
// }

// palindrome("128921")

// function palindrome(num){
//     var n=num,sum=0,rem;
//     while(n!=0){
//         rem=n%10;
//         sum=sum*10+rem;
//         n=parseInt(n/10);
//     }
//     if(sum==num){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }

// palindrome(7865434568778);


function solve(str){
    let s=str.split("");
    let p=s.reverse().join("");
   
    if(p==str){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

solve("12998389921")