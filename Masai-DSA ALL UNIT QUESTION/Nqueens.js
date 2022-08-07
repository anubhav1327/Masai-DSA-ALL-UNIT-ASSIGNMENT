
      function is_Safe(board){
    
    for (let i = 0;i < board.length;i++) {
        for (let j = 0;j < board.length;j++) {
            if (board[i][j] == 'Q') {
                let ct = 0
                for (let k = 0;k < board.length;k++) {
                    if (board[k][j] == 'Q') {
                        ct ++
                    }
                } if (ct > 1) {
                    return false
                } ct = 0
                let ti = i
                let tj = j
                while (ti < board.length && tj < board.length) {
                    if (board[ti][tj] == 'Q') {
                        ct ++
                    }
                    ti ++
                    tj ++
                } if (ct > 1) {
                    return false
                }ct = 0
                ti = i
                tj = j
                 while (ti >= 0 && tj >= 0) {
                    if (board[ti][tj] == 'Q') {
                        ct ++
                    } ti --
                    tj --
                } if (ct > 1) {
                    return false
                } ct = 0
                ti = i
                tj = j
                while (ti >= 0 && tj < board.length) {
                    if (board[ti][tj] == 'Q') {
                        ct ++
                    }
                    ti --
                    tj ++
                }
                
                if (ct > 1) {
                    return false
                }
                
                ct = 0
                ti = i
                tj = j
                
                while (ti < board.length && tj >= 0) {
                    if (board[ti][tj] == 'Q') {
                        ct ++
                    }
                    ti ++
                    tj --
                }
                
                if (ct > 1) {
                    return false
                }
            }
        }
    }
    
    return true
}

function NQueens(n, cur_board) {
    if (!is_Safe(cur_board)) {  
        return 0
    }
    if (cur_board.length == n) {
        return 1
    }
    let row = []
    for (let i = 0;i < n;i++) {
        row.push('.')
    }
    let ans = 0
    for (let i = 0;i < row.length;i++) {
        row[i] = 'Q'
        cur_board.push(row)
        ans += NQueens(n, cur_board)
        cur_board.pop(row)
        row[i] = '.'
    }
    
    return ans
}




var board=[]
var n=4
console.log(NQueens(n,[]))
    