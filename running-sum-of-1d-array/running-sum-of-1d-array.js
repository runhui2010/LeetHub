/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length<2)return nums;
    let res=[nums[0]];
    for(let i=1;i<nums.length;i++){
        res[i]=nums[i]+res[i-1];
    }
    return res;
};