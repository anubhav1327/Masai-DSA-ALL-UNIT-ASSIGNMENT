// Two Strings from One 
// Description

// You are given a string, stored in a variable with the name str. The size of the string is
//  stored in a variable with the name N
// You have to make two strings out of the given string, such that the first string contains all
//  the vowels present in str, in the same order as in str

// The second string contains all the consonants present instr, again in the same order as in
//  the original stringstr

// For example, consider the value stored inN = 6, str = "nrupul", then all the vowels in the
//  string areu,u, and the consonants aren,r,p,l. Therefore, the required output becomes

// uu
// nrpl
// Please note the order of consonants and the vowels in the two strings is same as in the original string. The string with the vowels should be printed first, and the string with the consonants should be printed on the next line
// Note : The string contains only lower case English Alphabets

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Print two strings, as explained in the problem statement

// Sample Input 1 

// 6
// nrupul
// Sample Output 1

// uu
// nrpl
// Hint

// In the sample test case, the value stored inN = 6, str = "nrupul", then all the vowels in the string areu,u, and the consonants aren,r,p,l. Therefore, the required output becomes

// uu
// nrpl


function solve(str){
    let s1="",s2=""
    for(var i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            s1+=str[i]
        }else{
            s2+=str[i]
        }
    }
    console.log(s1)
    console.log(s2)
}
solve("manjusha")