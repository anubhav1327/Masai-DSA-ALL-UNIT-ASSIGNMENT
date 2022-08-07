// Alan & Frequency 
// Description
// Alan Turing, the mathematician, is trying to break the encrypted messages of the
//  German Troops, generated by their encryption device "Enigma". To find the distribution 
// of characters, he needs to find out how many times a particular character appears in a 
// string. But, to feed the data into his computer, "Christopher", he needs the data in
//  lexicographic order, that is, in alphabetical order. Since, he is busy 
// making "Christopher" better, he asks you for help. Help Alan find the frequency of
//  characters in the encrypted strings in alphabetical order. The string contains only 
// lower case alphabets.

// Input
// The first line contains N, the length of the string, and the next line contains the
//  string itself.

// 1 <= N<=100

// Output
// For each unique character in the string, print the character along with its frequency
//  in the encrypted string, separated by '-' , on a new line.

// Sample Input 1 
// 4
// aman
// Sample Output 1

// a-2
// m-1
// n-1

function AlanFre(str){
    var obj={}
    var lower="abcdefghijklmnopqrstuvwxyz"

for(var i=0;i<str.length;i++){
   
        if(obj[str[i]]==undefined){
            obj[str[i]]=1
        }else{
            obj[str[i]]++
        }
    }
    for(var j=0;j<26;j++){
        if(obj[lower[j]])
            console.log(lower[j]+"-"+obj[lower[j]])
        
    }
}
AlanFre("aman")