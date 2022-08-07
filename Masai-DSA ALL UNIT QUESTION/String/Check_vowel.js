// Check Vowel 
// Description
// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// You have to printtrue, if the string contains at least one vowel, otherwise printfalse
// For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Printtrue, if the value stored instrcontains at least one vowel, otherwise printfalse

// Sample Input 1 
// 4
// stvr

// Sample Output 1
// false
// Hint

// In the sample test case, the value stored inN = 4, and the value stored instr = stvr

// Since, the value stored instrdoes not contain any vowels, therefore, the output isfalse

function vowel(str){
    if(str.includes("a")||str.includes("e")||str.includes("i")||str.includes("o")
    ||str.includes("u")){
        console.log("true")

    }else{
        console.log("false")
    }
}
vowel("strv")