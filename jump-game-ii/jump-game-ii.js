/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length===1)return 0;
    let res=new Array(nums.length).fill(Infinity);
    res[0]=0;
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(i-j<=nums[j]){
                res[i]=Math.min(res[j]+1,res[i]);
            }
        }
    }
    console.log(res)
    return res[nums.length-1];
};
    // 0 1 2 3 4
//     
    // 2 3 1 1 4
//     0 0 0 0 0
    // 0 1 1 2 2
    
    