// Pattern Printing IV 
// Description

// Given an integer N, and a pattern. Print the pattern as given in the sample I/O.

// Note: Please check for spaces.

// Input
// The first and the only line of the input contains the value ofN.

// Constraints

// 1 <=N<= 25


// Output
// Print the pattern as given in the sample test case.



// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
// *       *
// *       *
// *       *
// *       *

  
function solve(N){
    
    for(var i=0;i<N;i++){
        let str=""
        for(var j=0;j<N;j++){
            if(i==0 ||j==0 ||(j==N-1&&i<N)){
                str+="* "
            }else{
                str+="  "
            }
        }
        console.log(str)
    }
    
}
solve(5)
