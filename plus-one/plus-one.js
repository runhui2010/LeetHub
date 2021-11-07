/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1;i>-1;i--){
        let curr=digits[i];
        if(curr!==9){
            digits[i]++;
            return digits;
        }else{
            digits[i]=0;
        }
    }
    if(digits[0]===0)digits.unshift(1)
    return digits
};