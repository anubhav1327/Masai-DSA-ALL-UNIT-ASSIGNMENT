// Vowels in Rows 
// Description
// You are given a 2D array, whose dimensions are stored in two variables with the name
// N and M
// The value stored inNdenotes the number of rows, and the value inMdenotes the number 
// of columns
// The 2D array is stored in a variable with the namearr, and contains lower case English
//  characters
// You have to printYes, if any particular row of a 2D array contains at least one vowel,
//  at least print No
// For example, consider the value stored inN = 3,M = 2, and the array is
// arr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)

// Input
// The first line of the input contains the value stored inNandM
// The nextNlines containMvalues each denoting the value stored inarr

// Output
// For each row, printYes, if the row contains at least one vowel, otherwise printNo

// Sample Input 1 
// 3 2
// a b
// c d
// e f
// Sample Output 1
// Yes
// No
// Yes
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array is
// arr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)

var arr=[['a','b'],['c','d'],['e','f']]
for(var i=0;i<3;i++){
    flag=0
    for(var j=0;j<2;j++){
        if(arr[i][j]=="a"||arr[i][j]=="e"||arr[i][j]=="i"||arr[i][j]=="o"||arr[i][j]=="u"){
            flag=1
          break
        }
    }
    if(flag==1){
        console.log("Yes")
    }else{
        console.log("No")
    }
}