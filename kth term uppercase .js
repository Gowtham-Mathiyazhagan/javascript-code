
let str='string';
let num=2;
function upper (str,num)
{
  let result=""
for(i=0;i<=str.length-1;i++) 
{
    if((i+1)%num===0){
        
        result+=str[i].toUpperCase();
    }
    else
    {
        result+=str[i];
    }
}
return result;
}
console.log(upper(str,num));
