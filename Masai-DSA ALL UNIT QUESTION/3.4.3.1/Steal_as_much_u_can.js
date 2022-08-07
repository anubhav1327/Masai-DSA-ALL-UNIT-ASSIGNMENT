// Steal as much as you can 
// Description

// A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. However, the getaway car he brought with him can only fit a maximum weight ofC. All the gems in the store have a value and a weight associated with them such that gem ihas a value v(i)and a weight w(i).

// Your task is to figure out the maximum valueVof gems he can steal given the weight limit of the car. You can break a given gem into any fraction of itself.

// NOTE: Maximum value vshould be rounded to the nearest integer

// For example:

// Let Total Weight C = 50

// Number of gems = 3

// The Value of gems: 60 100 120

// The Weight of gems: 10 20 30

// The total value of the gems he can carry is = 240

// The fraction of each item taken is: 1 1 0.66666666666

// Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996


// Input
// Input Format

// First line contains an integer denoting the capacity C

// Second line contains the total number of gems n

// Third line contains the value of each gem separated by a space

// Fourth line contains the weight of each gem separated by a space

// Constraints

// 0 <= C

// 0 < n <= 1000000

// 0 <= v(i)

// 0 <= w(i)


// Output
// For each test case output a single integer: the maximum value rounded to the nearest integer


// Sample Input 1 

// 50 
// 3
// 60 100 120 
// 10 20 30
// Sample Output 1

// 240
