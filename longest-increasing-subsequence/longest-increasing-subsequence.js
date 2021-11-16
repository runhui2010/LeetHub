/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res=new Array(nums.length).fill(1);
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                res[i]=Math.max(1+res[j],res[i]);
            }
        }
    }
    console.log(res)
    let max=0;
    for(let num of res){
        max=Math.max(num,max);
    }
    return max;
};
