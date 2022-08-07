// Masai School! Hurray! 
// Description
// You are provided an integer N.
// For all numbers in the range[1,N], including N you have to print a string as per the 
// following rules:

// Print Masai School, if the number is a multiple of both 5 and 7.
// Print Masai. if the number is a multiple of 7 only.
// Print School, if the number is a multiple of 5 only.
// Else in all other cases print Hurray!

// Input
// Input Format :
// First line contains N

// Constraints :
// 1 <= N <= 100

// Output
// Output one of the 4 possible strings, as mentioned in description.

// Sample Input 1 

// 7
// Sample Output 1

// Hurray!
// Hurray!
// Hurray!
// Hurray!
// School
// Hurray!
// Masai
// Hint

// For sample test case 1 , as we print strings for each number for 1 to 7.

// Hurray!
// Hurray!
// Hurray!
// Hurray!
// School
// Hurray!
// Masai


function MasaiSchool(N){
    for(var i=1;i<=N;i++){
    if(i%5==0 && i%7==0){
        console.log("Masai School")
    }else if(i%7==0){
        console.log("Masai")
    }else if(i%5==0){
        console.log("School")
    }else{
        console.log("Hurray!")
    }
}
}

MasaiSchool(7)