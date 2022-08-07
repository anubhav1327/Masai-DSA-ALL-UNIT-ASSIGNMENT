// Masai Sentence Reversal 
// Description
// You are given a strings.
// You need to write a program that reverses the order/sequence in which words are present
//  in the sentence keeping the case of each character preserved (upper case character 
// should remain upper and lower case character is lower case).

// (Refer to the sample test case for better understanding)
// Input
// Input Format
// You are given a strings on first line

// Constraints
// There is at-least one word present in this string.

// Output
// Print resultant reversed string as mentioned in description.

// Sample Input 1 
// A Transformation in education

// Sample Output 1
// education in Transformation A

// Hint
// Sample 1 Explanation
// The sentence has been reversed in the sense that the sequence in which the words were 
// present in the initial sentence is reversed.
// Also, there is no change in the case of characters present in the sentence.

// function reversal(str){
//     var s=str.split(" ")
    
//     s.reverse()
    
//     console.log(s.join(" "))
// }
// var str="A Transformation in education";

// reversal(str)


// function reversal(str){
//     let arr=str.split(" ");
    
//     let newArray=[]
//     for(let i=arr.length-1;i>=0;i--){
      
//         newArray.push(arr[i])
//     }
//     console.log(newArray.join(" "))
// }

// var str="A Transformation in education";

// reversal(str)




// function masaiSentenceReverse(s) {
//     //write code here
    
//     var str="";
//     var ans="";
//     for(var i=s.length-1;i>=0;i--){
//         if(s[i]==" "){
//         var word="";
//         for(var j=str.length-1;j>=0;j--){
//             word+=str[j];
//         }
//             ans+=word+" ";
           
//              str="";
//         }else{
//         str+=s[i];
//     }
//     }
//     var wordlast="";
//     for(var j=str.length-1;j>=0;j--){
//         wordlast+=str[j];
//   }
//     ans+=wordlast;
//     console.log(ans)     
    
//   }

//   let s="A Transformation in education"
//   masaiSentenceReverse(s)
  
