let n= "abcd";
let m= "bcda";
function solve (n,m)
{
    let first=n.length
    let sec=m.length
    if(!first===sec)
    {
        return false;
    }
    
  let str1=n.split("").sort().join(" ") 
  let str2=m.split("").sort().join(" ") 
  if(str1===str2){
      return true;
  }
  else{
      return false;
  }
  
}
console.log(solve(n,m))