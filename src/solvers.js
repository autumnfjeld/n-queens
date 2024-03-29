/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = undefined; 
  var board = [];
  var row = [];
  for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
      (y === x) ? row.push(1) : row.push(0);
    }
    board.push(row);
    row = [];
  }
  solution = board;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = []; 
  var row = [];
  var positions = [];
  var remainder = null;

  if (n === 1) solution = [[1]];

  if (n === 2) solution = [[0, 0], [0, 0]];

  if (n === 3) solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  if (n >= 4) {
    //hueristic approach to make position list
    remainder = n % 6;

    if (remainder !== 2 || remainder !== 3){
      for (var i = 2; i <= n; i += 2){
        positions.push(i);
      }
      for (var i = 1; i <= n; i += 2){
        positions.push(i);
      }  
    }

    if (remainder === 2){
      var index = _.indexOf(positions, 1);
      positions[index] = 3;
      positions[index+1] = 1;
      positions.splice(index+2, 1);
      positions.push(5);
    }
    // Should add code for condition remainder === 3 for general solution

    // creating matrix
    for (var x = 0; x < n; x++) {           // row pos 
      for (var y = 0; y < n; y++) {         // col pos
        ( y === positions[x]) ? row.push(1) : row.push(0);
      }
      solution.push(row);
      row = [];
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
