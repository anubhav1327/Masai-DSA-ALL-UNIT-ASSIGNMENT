// Neelam's Journey
// Description

// Neelam has N friendsstudying in various schools. She wants to find a new friend in(N+1)th school. Assume all schools are separated by 1 unit distance. To reach(N+1)th school she has to board a bus.

// The ith school would cost ofC[i]rupees to travel 1 unit of distance. In other words, the bus fare to travel from the ith school to the jth school isabs(i – j ) * C[i]rupees.

// The task is to find the minimum bus fare to travel from school 1 to school(N + 1)i.e. beyond the last school.


// Input
// Input Format

// First Line Consists of Single integerN

// Second Line Consists ofNintegers separated by spaces.(Cost to travel 1 unit distance from ith school)

// Constraints

// 1 < =N<= 10^6

// 1 <=C[i]<= 10000


// Output
// Print the minimum cost to travel.


// Sample Input 1 

// 5
// 4 7 8 3 4
// Sample Output 1

// 18
// Hint

// Sample 1 Explanation

// Board the bus at the first school then change the bus at the fourth school.

// (3 * 4) + (2 * 3) = 12 + 6 = 18

