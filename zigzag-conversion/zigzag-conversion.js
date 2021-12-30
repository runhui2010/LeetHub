/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let res=[];
    let index=0;
    for(let j=0;j<s.length/numRows;j++){
        for(let i=0;i<numRows;i++){
            res.push([])
            res[i][j]=s[index];
            index++;
            if(i===numRows-1 && index<s.length){
                while(i>0 && index<s.length){
                    i--;
                    j++;
                    res[i][j]=s[index];
                    index++;
                }
            }
        }
        if(index===s.length)break;
    }
    let str='';
    for(let i=0;i<res.length;i++){
        for(let j=0;j<res[i].length;j++){
            if(res[i][j])str+=res[i][j];
        }
    }
    return str;
};