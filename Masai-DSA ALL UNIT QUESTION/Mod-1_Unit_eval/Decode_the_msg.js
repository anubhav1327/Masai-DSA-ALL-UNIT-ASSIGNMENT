// Decode the message 
// Description

// Your friend sent you an encrypted message consisting of characters A, C, G and T only .
// You know the decoded message is the longest repetition in the sequence. That is a maximum-
// length substring containing only one kind of character. Can you decode it?

// Input
// Input Format

// The only input line contains a string of n characters.

// Constraints
// 1 <= n <= 10^6

// Output
// Print one integer: the length of the longest repetition.

// Sample Input 1 

// ATTCGGGA
// Sample Output 1

// 3
// Hint

// Sample Input 1 Explanation

// In the given string , substring GGG of length 3 is the longest.

// Language: 
  
// Theme

 function solve(str){
    var obj={},mx=0;
  
    for(var i=0;i<str.length;i++){
        
        if(obj[str[i]]==undefined){
            obj[str[i]]=1
            
        }else{
            obj[str[i]]++
          
        }
    
    if(obj[str[i]]>mx){
        mx=obj[str[i]];
    }
}
    console.log(mx)
    
}

solve("ATTCGGGA")