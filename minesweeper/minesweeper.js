/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const [x,y]=click;
    if(board[x][y]==='M'){
        board[x][y]='X';
    }else{
        checkNeighor(board,x,y);
    }
        
    
    return board;
};

var checkNeighor=(board,x,y)=>{
    const directions=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    let count=0;
        directions.forEach(dir=>{
            if(x+dir[0]>=0 && x+dir[0]<board.length && y+dir[1]>=0 && y+dir[1]<board[0].length && board[x+dir[0]][y+dir[1]]==='M'){
                count++;
            }
        })
        if(count===0){
            board[x][y]='B';
            directions.forEach(dir=>{
                if(x+dir[0]>=0 && x+dir[0]<board.length && y+dir[1]>=0 && y+dir[1]<board[0].length && board[x+dir[0]][y+dir[1]]==='E'){
                    checkNeighor(board,x+dir[0],y+dir[1])
                }
            
        })
        }else{
            board[x][y]=String(count);
        }
}