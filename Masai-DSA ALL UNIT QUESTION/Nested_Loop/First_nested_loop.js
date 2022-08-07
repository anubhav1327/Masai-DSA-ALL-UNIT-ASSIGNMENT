// Your first nested loop 
// Description
// You are given a number, stored in a variable with the name num
// You have to printnumlines, and on each line print all the numbers from 1 to the value
//  stored in num
// For example, if the value stored innum = 5, then the required output is
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// Input
// The first and the only line of the input contains the value stored innum

// Output
// Print the output as mentioned in the problem statement

// Sample Input 1 
// 4
// Sample Output 1
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Hint

// In the sample test case, the value stored innum = 4

// Therefore, we print 4 lines, and on each line we print all the values from[1,4]

// Hence, the output will be

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


for(var i=1;i<=5;i++){
    str=""
    for(var j=1;j<=5;j++){
        str+=j+" "
    }
    console.log(str)
}