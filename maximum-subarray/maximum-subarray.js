/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length===1)return nums[0];
    for(let i=1;i<nums.length;i++){
        const curr=nums[i];
        nums[i]=Math.max(nums[i],nums[i-1]+nums[i]);
        
        
    }
    console.log(nums)
    return Math.max(...nums)
};