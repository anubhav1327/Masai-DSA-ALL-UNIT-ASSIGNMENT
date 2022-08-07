// Strongly Typed Password 
// Description
// You are given an array of strings, whose size is stored in a variable with the nameN
// The string array, is stored in a variable with the namearr
// You have to find how many of the strings stored in the array arr, areweak, and how 
// many of them are strong
// A string is considered as strong if it contains at least one of the following 
// characters in it@,$,#,*
// Consider the example, in which the value stored inN = 4, and the array,
// arr = ["test123", "new@t", "mon*y", "nrupul"]
// The first string "test123", does not contain any of the required characters, 
// hence the string is weak
// The second string "new@t", contains the character `@`, hence the string is strong
// The third string "mon*y", contains the character `*`, hence the string is strong
// The fourth string "nrupul", does not contain any of the required characters, hence
//  the string is weak
// Therefore, the required output becomesweak strong strong weak

// Input
// The first line of the input contains the value stored inN
// The next line containsNspace separated string denoting the values stored in the 
// string array

// Output
// For each string present inarr, print whether the string isweakorstrong

// Sample Input 1 
// 4
// test123 new@t mon*y nrupul

// Sample Output 1
// weak strong strong weak
// Hint

// In the sample test case, the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak


function StrongWeak(arr){
    str=""
    for(var i=0;i<arr.length;i++){
    if(arr[i].includes("@")||arr[i].includes("*")||arr[i].includes("#")||
    arr[i].includes("$")){
        str+="strong "
    }else{
        str+="weak "
    }
}
    console.log(str)
}
arr=["test123", "new@t", "mon*y", "nrupul"]
StrongWeak(arr)