let arr=[-12,-3,67,4,22,-31,-6,81,-21,45,6]
arr.sort((a,b)=>{
    return a-b;

});
let tar=4

let solve=(arr,tar)=>
{
    let start=0;
    let end=arr.length-1;
    while(start<end)
    {
        let mid=(start+end)/2;
        if(tar>mid[arr])
        {
            start=mid+1;
        }
        else if(tar<arr[mid])
        {
            end=mid-1;
        }
        else{
        return arr[mid];
        }

    }
    return -1;
}
console.log(solve(arr,tar))