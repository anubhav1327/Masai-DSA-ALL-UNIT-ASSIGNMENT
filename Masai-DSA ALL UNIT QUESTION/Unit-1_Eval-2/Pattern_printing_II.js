// Pattern Printing III 
// Description

// You are given a number stored in a variable with the nameN

// You have to print the pattern as shown below according to the value stored inN

// For example, consider the value stored inN = 5, then the required pattern will be

// * * * * *
//         *
//         *
//         *
// * * * * *

// Note : Please check for spaces

// Input
// The first and the only line of the input contains the value stored in the variableN

// Output
// Print the pattern as shown in the problem statement, according to the value stored inN

// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
//         *
//         *
//         *
// * * * * *
// Hint

// In the sample test case, the value stored inN = 5, then the required pattern will be

// * * * * *
//         *
//         *
//         *
// * * * * *
// The following pattern uses_to show the presence of spaces in the pattern required. 
// These are shown only for understanding, and should not be printed in the actual program

// * * * * *
// ________*
// ________*
// ________*
// * * * * *

function pattern(N){
   
    for(var i=1;i<N;i++){
        str=""
        for(var j=1;j<=N;j++){
            if(i==1||i==N && i<=N){
                str+="* "
            }else{
                str+=" "
            }
        }
    
    console.log(str)
    }
}
pattern(5)
