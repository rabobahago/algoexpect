// Find a Column in 2D Array of All Ones
// You are Given a two dimensional array containing arrays of integers, where each integer is either a 1 or a 0. Return true if any row or column contains only ones, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 1],
//   [0, 1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0]
// ])
// > true

// The second column (1st index of all arrays), contains all 1's, so we return true.

// Example #2
// solve([
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0]
// ])
// > false

const findColumnIn2DAllOnes = (array) => {
  //copy the array
  let rowArray = array.slice();
  let row = helper(rowArray);

  //the code below convert all the columns element into
  //into 2D array so we can loop through them
  //easily
  let col = [];
  //remember we are loop through all the columns that is why array[0]
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      //check to see if there is no element at index i of col
      //then set the array with array[j][i]
      //else push array[j][i] to the last array
      //in the col array
      if (!col[i]) {
        col[i] = [array[j][i]];
      } else {
        col[col.length - 1].push(array[j][i]);
      }
    }
  }
  //call the helper function with col array.

  let colGetFromRow = helper(col);

  return !!row.length || !!colGetFromRow.length;
};
//this return array of element of row or col that are all one's
const helper = (array) => {
  let result = [];
  array.map((arr) => {
    if (arr.every((a) => a === 1)) {
      result.push(...arr);
    }
  });
  return result;
};
console.log(
  findColumnIn2DAllOnes([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);
console.log(
  findColumnIn2DAllOnes([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);