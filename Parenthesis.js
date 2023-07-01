
function solve (a){
    let arr=[];
    for(let i=0;i<=a.length-1;i++)
{
        if(a[i]==='{'||a[i]==='['||a[i]==='(')
        {
            arr.push(a[i]);
            continue;
        }
        
    
    if(arr.length===0){
        return 'no';
    }
    
    
        let check
        switch(a[i])
        {
            case '}':
                check===arr.pop()
                if(check==='['||check==='('){
                    return false;
                }
                break ;
                
             case ']':
                check===arr.pop()
                if(check==='{'||check==='('){
                    return false;
                }
                break ;  
                
                 case ')':
                check===arr.pop()
                if(check==='{'||check==='['){
                    return false;
                }
                break ;
        }
    }
  return arr.length===0;
    
}
if(solve("{}]{[]}"))
{
    console.log('yes')
}
else
{
    console.log('no')
}
