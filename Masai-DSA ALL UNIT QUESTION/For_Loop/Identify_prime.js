// Identify Prime 
// Description
// You are given a number stored in a variable with the name num
// Check if the number is a prime number or not
// If the value stored innum, is a prime number print Yes, else print No

// Note : A prime number is a number, that is divisible by only 1 and the number itself

// Input
// The first and the only line of the input contains the value stored innum

// Output
// If the value stored innum, is a prime number printYes, else printNo

// Sample Input 1 
// 13
// Sample Output 1
// Yes
// Hint

// In the sample test case, the value stored in num = 13. Since,13is a prime number, 
// the output is Yes


function Prime(Number){
    var flag=0
  for(var i=2;i<Number;i++){
    if(Number%i!=0){
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
Prime(190)