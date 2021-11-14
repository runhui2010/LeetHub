/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res=[];
    for(let i=0;i<n;i++){
        res[i]=[];
        for(let j=0;j<m;j++){
            res[i][0]=1;
            res[0][j]=1;
        }
    }
    console.log(res)
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            res[i][j]=res[i-1][j]+res[i][j-1];
        }
    }
    console.log(res)
    return res[n-1][m-1];
};

