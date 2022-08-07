// Spiderman in Bangalore! Ended
// Description

// There are N buildings in Bangalore, numbered 1,2,…,N. For each i (1≤i≤N), the height of building i is hi.

// After visiting Patna, Spiderman has come to visit Bangalore and as you know he has a superpower of jumping from one building to the other

// He is initially on building 1. He will repeat the following action some number of times to reach building N:

// If the spiderman is currently on building i, jump to one of the following: Building i+1,i+2,…,i+K. Here, a cost of |hi−hj| is incurred, where j is the building to land on.

// (|hi - hj| is the absolute difference between the heights of buildings)

// Find the minimum possible total cost incurred before the Spiderman reaches building N.


// Input
// Input Format

// First line contains N and K

// Second line contains n space separated integers representing h[i]

// Constraints

// 2≤ N ≤100000

// 1≤ hi ≤10000

// K <= 100




// Output
// Print the minimum possible total cost incurred.


// Sample Input 1 

// 5 3
// 10 30 40 50 20
// Sample Output 1

// 30
// Sample Input 2 

// 10 4
// 40 10 20 70 80 10 20 70 80 60

// Sample Output 2

// 40
// Hint

// Sample 1 Explanation

// If we follow the path 1 → 2 → 5, the total cost incurred would be |10−30|+|30−20|=30.

// Sample 2 Explanation

// If we follow the path 1 → 4 → 8 → 10, the total cost incurred would be |40−70|+|70−70|+|70−60|=40.



