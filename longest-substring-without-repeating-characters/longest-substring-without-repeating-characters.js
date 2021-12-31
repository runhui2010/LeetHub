/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0)return 0;
    let obj={};
    let res=0;
    for(let i=0;i<s.length;i++){
        obj={};
        let count=1;
        obj[s[i]]=true;
        for(let j=i+1;j<s.length;j++){
            if(obj[s[j]]){
                break;
            }else{
                obj[s[j]]=true;
                count++;
            }
        }
        res=Math.max(count,res);
        obj[s[i]]=false;
        
    }
    return res;
};

    