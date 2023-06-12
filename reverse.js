let a=[1,2,3,4,5];
let b=[];
function reverse (a,b){
    
    for(i=a.length-1;i>=0;i--)
    {
        
         b.push(a[i]);
    }
    return b.join('->');
}
    
 console.log(reverse(a,b));   
