/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letterCount={};
    s=s.split('');
    let len=0;
    for(let letter of s){
        if(!letterCount[letter]){
            letterCount[letter]=1;
        }else{
            letterCount[letter]++;
            if(letterCount[letter]===2){
                letterCount[letter]=0
                len+=2;
            }
        }
    }
    console.log(letterCount)
    
    for(let count of Object.values(letterCount)){
        if(count===1){
            return len+1;
        }
    }
    return len;
    
};