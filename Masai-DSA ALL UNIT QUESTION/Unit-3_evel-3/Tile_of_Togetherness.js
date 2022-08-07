// Tile of Togetherness Ended
// Description

// Harry and Ron are walking on a pathway which has numbers on it. The tiles are arranged such that, if a tile has a number X, then the next tile will have number Y on it, where Y = X + sum of digits of X. Harry starts at a tile, which has a greater value printed on it, then Ron.

// Both of them start walking along the pathway, with the number having the same rules. Find the point after which their paths will be together. If Ron surpasses Harry before they meet, print -1.


// Input
// The first and the only line of each test case contains N, and M, the starting points.



// Constraints

// 1 <= N <= 200000

// 1 <= M <=200000


// Output
// For each test case, print a single integer denoting the tile after which their paths become similar, or -1, if Ron surpasses Harry before they meet, on a new line.


// Sample Input 1 

// 32 47
// Sample Output 1

// 47
// Hint

// The value of 32, going by the rules given in the question, will be 32-> 32 + (3 + 2) -> 37 + (3 + 7) -> 47, which is equal to the second value, so their paths become equal after the value 47

