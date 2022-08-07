// Make Leaderboard
// Description
// You are given name and marks of N different students in a hackerrank contest.
//  Your task is to write a program that makes leaderboard of the students under 
// following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the
//  intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your 
// own sorting algorithm

// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name and
//  marks is separated by a space)

// Constraints :
// N < 100

// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks,
//  the person whose name comes first in alphabetical order comes first in order. 4
// However their rank will be same)

// 3. The student placed next to the same marks students will get the rank skipping the
//  intermediate ranks.


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28    
// virus 32
// joy 45
// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan
function Make_Leaderboard(names,marks,N){
    for(var i=0;i<N-1;i++){
        var max=i;
        for(var j=i+1;j<N;j++){
            if(marks[j]>marks[max]){
                max=j;
            }else if(marks[j]==marks[max] && names[j]<names[max]){
                max=j
            }
        }
        var temp=names[i];
        names[i]=names[max];
        names[max]=temp;
        
        
        var temp=marks[i];
        marks[i]=marks[max];
        marks[max]=temp;
    }
}
function runProgram(input){
    var input=input.trim().split('\n');
    var N=+input[0];
    var marks=[]
    var names=[]
    for(var i=1;i<=N;i++){
        var[name,mark]=input[i].trim().split(" ");
        marks.push(mark);
        names.push(name);
    }
         Make_Leaderboard(names,marks,N);
        var rank=1
        var actual_rank=1
        console.log(1+" "+names[0])
        actual_rank++
        for(var i=1;i<N;i++){
            if(marks[i]!=marks[i-1]){
                rank=actual_rank;
            }
            actual_rank++
     console.log(rank + " " + names[i])
        }
    
   
}