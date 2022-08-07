// Unique ways of Coin Change
// Description

// Given an array, A of m denominations of coins and given an amount n, find a number of unique 
// ways to make the change from the given coin types.

// Read the sample input explanation for better understanding.
// Input
// Input Format

// The first line contains two space-separated integers describing the respective values of

// n and m, where:

// n is the required amount

// m is the number of coin types

// The second line containsan array of integers representing available denominations.

// Constraints

// 1<= A[i] <=50

// 1 <= n <= 250

// 1 <= m <= 50

// Each A[i] is gauranteed to be distinct

// Output
// Print the number of ways we can get a sum of nfrom the given infinite supply of mtypes of 
// coins.

// Sample Input 1 

// 4 3
// 1 2 3
// Sample Output 1

// 4
// Hint

// Sample Input 1 Explanation

// There are four ways to make the change for n = 4using coins with values given by:

// A = [1,2,3] :

// 1 .{1,1,1,1}

// 2. {1,1,2}

// 3. {2,2}

// 4. {1,3}

// thus we print 4 as answer.


function solve(arr,n,m){
     if(n==0||m==0)
    return 1;
     
    else
        if(arr[n-1]<=m)
    return solve(arr,n-1,m-arr[n-1])+solve(arr,n-1,m)
        
    else 
    
        if(arr[n-1]>m)
    return solve(arr,n-1,m)
    
}

console.log(solve([1,2,3],3,4))
