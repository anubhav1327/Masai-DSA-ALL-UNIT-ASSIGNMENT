// Masai Restaurant 
// Description

// You love food. Hence, you took up position of a manager at Masai restaurant that serves people with delicious food packages. It is a very famous place and people are always queuing up to have one of those packages. Each package has a cost associated with it. The packages are kept as a pile. The job of a manager is very difficult. You need to handle two types of queries:

// 1) Customer Query:

// When a customer demands a package, the food package on the top of the pile is given and the customer is charged according to the cost of the package. This reduces the height of the pile by 1.

// In case the pile is empty, the customer goes away empty-handed.

// 2) Chef Query:

// The chef prepares a food package and adds it on top of the pile. And reports the cost of the package to the Manager.

// Help him manage the process.


// Input
// Input Format:

// First line contains an integer Q, the number of queries. Next Q lines follow.

// A Type-1 ( Customer) Query, is indicated by a single integer 1 in the line.

// A Type-2 ( Chef) Query, is indicated by two space separated integers 2 and C (cost of the package prepared) .

// Constraints :

// Q<100

// C<1000


// Output
// For each Type-1 Query, output the price that customer has to pay i.e. cost of the package given to the customer in a new line. If the pile is empty, print "No Food" (without quotes).


// Sample Input 1 

// 6
// 1
// 2 5
// 2 7
// 2 9
// 1
// 1
// Sample Output 1

// No Food
// 9
// 7
