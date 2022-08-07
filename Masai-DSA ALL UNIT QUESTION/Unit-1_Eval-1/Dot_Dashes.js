// Dots and Dashes
// Description
// You are given a number stored in a variable with the name N
// Print the required pattern, such that for all numbers in the range[1, N], 
// includingN, if the number is odd, print a single_, else print N * without space, on a new 
// line

// For example, consider the value stored inN = 5. Therefore, the required output is
// _
// *****
// _
// *****
// _

// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the required pattern as shown in the problem statement

// Sample Input 1 
// 6

// Sample Output 1
// _
// ******
// _
// ******
// _
// ******

// Hint
// In the sample test case, the value stored in N = 6
// Therefore, the required output will be

// _
// ******
// _
// ******
// _
// ******

function pattern(N){
    
    for(var i=0;i<N;i++){
        if(i%2==1){
            str=""
            for(var j=0;j<N;j++){
               str+='*'
            }
            console.log(str)
      
        }else{
            console.log("_")
        }
    }
}
pattern(6)

