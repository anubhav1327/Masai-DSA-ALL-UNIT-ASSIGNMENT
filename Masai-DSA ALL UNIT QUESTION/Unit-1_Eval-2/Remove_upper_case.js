// Remove Upper Case 
// Description
// You are given a string, stored in a variable with the namestr, while the variable 
// Nstores the size of the string
// You have to remove all the characters in the string which are uppercase English Alphabets,
//  and print the resultant string
// For example, consider the value stored instr = "MasAi", and N = 5
// The charactersMandAare uppercase, and hence we remove them. Therefore, the required 
// output becomes asi

// Input
// The first line of the input contains the value stored inN
// The second line of the input contains the value stored instr

// Output
// Print the updated string after removing all the uppercase characters

// Sample Input 1 
// 5
// MasAi

// Sample Output 1
// asi
// Hint

// In the sample test case, the value stored instr = "MasAi", and N = 5

// The charactersMandAare uppercase, and hence we remove them. Therefore, the required 
// output becomes asi

function lowerStr(str){
    var lower="abcdefghijklmnopqrstuvwxyz"
    s=""
    for(var i=0;i<str.length;i++){
        for(var j=0;j<26;j++){
            if(str[i]==lower[j]){
                s+=str[i]
            }
        }
    }
    console.log(s)
}

lowerStr("MasAi")