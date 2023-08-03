let arr=[11,34,54,62,5,2,51,-1,50];
let solve= (arr)=>{
    let ans=arr[0];
    for(let i=1;i<=arr.length;i++)
    {
        if(arr[i]<ans)
        {
         ans=arr[i];
        }
    }
    return ans;
}
console.log(solve(arr));