
    var board = [];
    for (var i = 0; i < 4; i++) {
      board[i] = [];
      for (var j = 0; j < 4; j++) {
        board[i][j] = ".";
      }
    }
    var ans = [];
    nqueen(4, board, 0, ans);
  
    if (ans.length == 0)
      console.log(0);
    else
      console.log(ans.length);
  
  
  function nqueen(size, board, col, ans) {
    if (col == size) {
      var al = [];
      for (var r = 0; r < size; r++) {
        var arr = board[r];
        var s = arr;
        al.push(s);
      }
      ans.push(al);
      return;
    }
  
    for (var r = 0; r < size; r++) {
      if (safeN(r, col, board, size)) {
        board[r][col] = 'Q';
        nqueen(size, board, col + 1, ans);
        board[r][col] = ".";
      }
    }
    return;
  }
  
  function safeN(i, j, board, size) {
    for (var col = 0; col < j; col++) {
      if (board[i][col] == 'Q') {
        return false;
      }
    }
    var row = i;
    var col = j;
    while (row >= 0 && col >= 0) {
      if (board[row][col] == 'Q') {
        return false;
      }
      row--;
      col--;
    }
    col = j;
    row = i;
    while (row < size && col >= 0) {
      if (board[row][col] == 'Q') {
        return false;
      }
      row++;
      col--;
    }
    return true;
  }
  
  