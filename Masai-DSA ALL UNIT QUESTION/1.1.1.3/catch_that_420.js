// Catch that 420! 
// Description
// You are given an integer n. Your task is to find if the string 420 is present in it or
//  not.
// If 420 is present in it Print Caught or Print Escaped.

// Input
// Input Format
// You are provided an integer n.

// Constraints
// `1 <= N <= 1000000

// Output
// Output Format
// Output an string based on the conditions mentioned in description.

// Sample Input 1 
// 97420

// Sample Output 1
// Caught

// Hint
// Sample 1 Explanation
// 97420 contains 420.

// Hence output is "Caught"

// function find(N){
//     if(N.includes(420)){
//         console.log("Caught")
//     }else{
//         console.log("Escaped")
//     }
// }
// find("9742786")

let str="5698520",flag=0
for(var i=0;i<str.length;i++){
   let s=""
    for(var j=i;j<str.length;j++){
        s+=str[j]
        if(s=="420"){
           
            flag=1
            break
        }
    }
}
    if(flag){
        console.log("Caught")

    }else{
        console.log("Escaped")
    }


