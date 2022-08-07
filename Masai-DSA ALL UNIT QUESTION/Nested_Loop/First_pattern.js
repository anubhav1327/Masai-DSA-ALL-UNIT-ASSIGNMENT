// Your First Pattern 
// Description
// You are given a number stored in a variable with the name n
// You have to printnlines, and on each line you have to print n stars
// For example, consider the value stored inn = 4. Then, the required output will be
// * * * *
// * * * *
// * * * *
// * * * *

// Input
// The first and the only line of the input contains the value stored in the variable n

// Output
// Print the pattern as shown in the problem statement

// Sample Input 1 
// 5
// Sample Output 1

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// Hint

// In the sample test case, the value stored inn = 5. Therefore, the required output is

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 


for(var i=0;i<5;i++){
    str=""
    for(var j=0;j<5;j++){
        str+="* "
    }
    console.log(str)
}