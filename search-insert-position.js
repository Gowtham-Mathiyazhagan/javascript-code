// let nums=[1,2,5,2,3];
// nums.sort((a,b)=>{
//     return a-b;
// });
// console.log(nums)
// let target=2;
// var targetIndices = function(nums, target) {
//    let start=0;
//    let end=nums.length-1;
//    let arr=[];
//    while(start<=end)
//    {
//        let mid=Math.floor((start+end)/2);
//        if(nums[mid]===target)
//        {
//             arr.unshift(mid);
//        }
//        if(target>nums[mid])
//        {
//            start=mid+1;
//        }
//        else{
//            end=mid-1;
//        }
//    }
//    return arr.length>0? arr :[];
// };
// console.log(targetIndices(nums,target));

let nums=[1,3,5,6];
 let target=2;

 console.log(nums)
var searchInsert = function(nums,target) {
 let start=0;
    let end=nums.length-1;
    while(start<=end)
    {
        let mid=start+Math.floor((end-start)/2);
        if(nums[mid]===target)
        {
            return mid;
        }
        else if(target>nums[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }
    return start;
};
let result=searchInsert(nums,target);
console.log(result)