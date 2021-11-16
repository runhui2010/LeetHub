/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length===0)return [];
    let result=[];
    helper(digits,result,'',0);
    return result;
    
};
const helper=(digits,result,curr,index)=>{
    if(digits.length===curr.length){
        result.push(curr);
        return;
    }
    for(let x of letters[digits[index]]){
        helper(digits,result,curr+x,index+1)
    }
}
   

const letters={
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
    
}