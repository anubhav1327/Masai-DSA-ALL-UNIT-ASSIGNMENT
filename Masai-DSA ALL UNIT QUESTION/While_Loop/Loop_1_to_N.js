// Loop 1 to N 
// Description
// You are given a number stored in a variable with the name num
// You have to print all the numbers from 1 tonum, including num as well.
// Print each number on a new line

// Input
// The first and the only line of the input contains the value present in num

// Output
// Print all the numbers from 1 to the value stored innum, includingnumas well, on a new line

// Sample Input 1 
// 5

// Sample Output 1
// 1
// 2
// 3
// 4
// 5

// Hint
// In the sample test case, the value stored innum = 5
// Therefore, all the values from1 to 5are printed on a new line

function loop(N){
    for(var i=1;i<=N;i++){
        console.log(i)
    }
}

loop(5)