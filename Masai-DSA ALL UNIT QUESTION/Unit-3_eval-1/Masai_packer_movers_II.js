// Masai Packers & Movers II Ended
// Description

// You are excited about your new job and want to move to Bangalore, as soon as possible. You have to transport K units of weight of your stuff to Bangalore, therefore, you hired Masai Packers & Movers to do the job for you. The company has N trucks, each with a certain capacity C. Because of surge in fuel prices, the company has made a new policy that the trucks will be allowed to travelled, only if the truck is completely filled and has no empty spaces. Also, because of some issues, the company has only one driver. Therefore, in one day only a single truck can be used, to transport the things to Bangalore. Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. If it is impossible to transport everything to Bangalore, print -1.


// Input
// The first line contains K and N, the total weight that needs to be transported, and N the number of trucks available.

// Next line contains N space separated integers, denoting the capacity of each truck.

// Constraints

// 1 <= K <= 40

// 1 <= N <= 7

// 1 <= C <= 10


// Output
// Print a single line containing two integers denoting the minimum and the maximum number of days it will take, to transport all the weight to Bangalore. If, it is impossible, print -1.


// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 1 3
// Sample Input 2 

// 39 3
// 8 10 2
// Sample Output 2

// -1
// Hint

// The total number of ways in which the boxes can be delivered is 4, given as, (1,1,1),(2,1),(1,2),(3). The maximum number of repetitions required will be  3 and the minimum would be 1. Therefore, the answer is 1 3

// In the second test case, there is no way, in which the entire weight can be transported, therefore, the output is -1.

