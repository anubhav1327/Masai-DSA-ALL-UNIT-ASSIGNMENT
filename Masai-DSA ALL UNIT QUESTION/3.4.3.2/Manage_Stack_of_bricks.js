// Manage stacks of bricks 
// Description

// You want all your bricks to be stacked. Currently, you have N stacks of bricks each with height H1, H2, H3, ... HN(assuming all bricks are of 1 unit height).You did not like the configuration much and want to change the height of each stack. To increase the height of a particular stack you can add some bricks to it and to decrease the height you can take out some bricks from that stack.

// You require X units of effort for putting up an item onto the stack and Y units of effort for removing it. Find an integer which is the minimum effort required.

// NOTE: You just need to make stacks of a given height. Not necessarily each stack should be made from its corresponding stack.


// Input
// Input Format:

// The First Line of input contains an integer t, which is the number of test cases. then, t lines follow where first three lines of each test case contains three integers N, X and Y then N lines follow containing two integers each a[i] and b[i] (Initial height of i-th stack and final height of i-th stack.)

// Constraints:

// t <= 100

// n <= 100000

// a[i], b[i] <= 1000000


// Output
// Output an integer which is the minimum effort required.


// Sample Input 1 

// 1
// 3
// 6
// 4
// 3 1
// 1 2
// 1 2
// Sample Output 1

// 10
