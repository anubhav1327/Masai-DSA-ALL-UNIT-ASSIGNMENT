// Pattern of Inverted L 
// Description
// You are given a number stored in a variable with the name,N
// Print the pattern as shown below, according to the value stored inN
// For example, consider the value stored inN = 5
// Then, the required output will be, which represents an invertedL

// * * * * *
// *
// *
// *
// *

// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the output as shown in the problem statement

// Sample Input 1 
// 5

// Sample Output 1
// * * * * *
// *
// *
// *
// *
// Hint
// In the sample test case, the value stored inN = 5
// Therefore, the output required will be

// * * * * *
// *
// *
// *
// *

function pattern(N){
    for(var i=0;i<N;i++){
        str=""
        for(var j=0;j<N;j++){
            if(i==0 && j>=0 || j==0 && i>=0){
                str+="* "
            }
        }
        console.log(str)
    }
}

pattern(6)