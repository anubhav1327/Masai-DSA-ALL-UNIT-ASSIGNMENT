
function sub(str,N,pos){
    console.log(str.join(" "))
    for(var i=pos;i<N;i++){
       str.push(i+1)
        sub(str,N,i+1)
        str.pop()
    }
    
    
 }
sub([],3,0)

