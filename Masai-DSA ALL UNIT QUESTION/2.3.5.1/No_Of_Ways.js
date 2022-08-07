// Number of ways problems 
// Description

// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or
//  3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

// Input
// input Format

// Input contains integer N that is number of steps

// Constraints

// N <= 30


// Output
// Output Format

// Output for each integer N the no of possible ways w.


// Sample Input 1 

// 4
// Sample Output 1

// 7
// Hint

// No of the ways for n=4 are:-

// 1 1 1 1

// 1 1 2

// 2 1 1

// 1 2 1

// 1 3

// 3 1

// 2 2


function solve(N){
    
    if(N<0){
        return 0
    }else if(N==0)
    return 1;
    else
    return solve(N-1)+solve(N-2)+solve(N-3)
}
console.log(solve(4))