// Use Side Lane 
// Description

// There are N trucks numbered from 1 to N. The trucks are coming on a road in a random
//  manner.(by random, it means that any order of number: not sorted) There is a side
//  lane which can be used to order the sequence of truck properly(1,2,3,..N)

// Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample 
// test case.

// If it is possible to achieve using the side land, print "yes"

// else print "no"

// Note :The side street is so narrow that no two trucks can pass each other. Thus, the
//  truck that enters the side street last must necessarily leave the side street first.
//  Because the trucks  move up closely, a truck cannot drive back and re-enter the side
//  street or the approach street.

// Input
// Input Format :

// There are several test cases.

// The first line of each test case contains a single number n, the number of trucks.

// The second line contains the numbers 1 to n in an arbitrary order.

// All the numbers are separated by single spaces. These numbers indicate the order in
//  which the trucks arrive in the approach street.

// Input ends with number 0

// Constraints :

// N < 1000

// Output
// For each test case your program has to output a line containing a single word "yes" 
// if the trucks can be re-ordered with the help of the side lane, and a single word "no" 
// in case it is not possible.


// Sample Input 1 

// 5
// 5 1 2 4 3 
// 0
// Sample Output 1

// yes



function runProgram(input){
    var input=input.trim().split('\n');
    var p=0;
    while(true){
    var n=+input[p];
    if(n==0){
        return
    }
    
    var arr=input[p+1].split(" ").map(Number);
    p+=2
    console.log(doit(arr,n))
    } 
}
function doit(arr,n){
    var stk=[];
    var ind=0;
    var next_number=1;
    while(ind<n || stk.length>0){
        if(ind<n && arr[ind]==next_number){
            ind++;
            next_number++
        }else if(stk.length>0 && stk[stk.length-1]==next_number){
            stk.pop();
            next_number++
        }else{
            if(ind<n){
                stk.push(arr[ind])
                ind++
            }else{
                return "no"
            }
        }
    }
    if(next_number>n){
        return 'yes'
    }else{
        return 'no'
    }
}
if(process.env.USER==="manjusha"){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read='';
    process.stdin.on('data',function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
         read=read.replace(/\n$/,"");
         runProgram(read);
    });
    process.on("SIGINT",function(){
        read=read.replace(/\n$/,"");
         runProgram(read);
         process.exit(0);
    });
}
