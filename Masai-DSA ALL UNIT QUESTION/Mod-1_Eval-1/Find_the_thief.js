// Find the Thief 
// Description

// Recently, a robbery took place at the Royal Bank of Masai. Now, amount of money stole is
//  stored in a variable with the name N

// The branch manager has doubts on three individuals, and the account balance of the three
//  individuals is stored in the variables with the following namePerson_A, Person_B, Person_C

// If the bank balance of person A, is greater than the amount of money stolen, the victim is`Person A`

// If the bank balance of person B, is greater than the amount of money stolen, the victim is`Person B`

// If the bank balance of person C, is greater than the amount of money stole, the victim is`Person C`

// Else, since the victim is not found, the output should be`Not Found`
// Find the victim

// Input
// The first line of the input contains the value stored in the variable with the namePerson_A

// The second line of the input contains the value stored in the variable with the namePerson_B

// The third line of the input contains the value stored in the variable with the namePerson_C

// The fourth line of the input contains the value stored in the variable with the name N


// Output
// Print the output as per the conditions mentioned in the problem statement


// Sample Input 1 

// 30000
// 12000
// 43000
// 31000
// Sample Output 1

// Person C
// Sample Input 2 

// 4000
// 3000
// 2000
// 5000
// Sample Output 2

// Not found
// Hint

// In the first sample test case, the value stored inPerson_A = 30000, Person_B = 12000, Person_C = 43000, and N = 31000. Since, the value stored in the variablePerson_Cis greater than the value stored inN. Therefore, the output isPerson C

// In the first sample test case, the value stored inPerson_A = 4000, Person_B = 3000, Person_C = 2000, and N = 5000. Since, all the values are lesser than the value stored inN, therefore, the output isNot found


function solve(A,B,C,N){
    if(A>N){
        console.log("Person A")
    }else if(B>N){
        console.log("Person B")
    }else if(C>N){
        console.log("Person C")
    }else{
        console.log("Not Found")
    }
}

solve(43000,30000,12000,31000)