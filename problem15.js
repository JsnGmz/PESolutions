/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// * Create and n + 1 by n + 1 matrix.
const createGrid = (num) => {
  const grid = [];
  for (let i = 0; i < num + 1; i++) {
    grid.push([]);
    for (let j = 0; j < num + 1; j++) {
      grid[i].push(0)
    }
  }
  return grid;
}

// * Set the first row and first column to = 1.
const initializeGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    grid[0][i] = 1;
    grid[i][0] = 1;
  }
  return grid;
}

// *  Calculate the number of paths.
const numOfPaths = (grid) => {
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid.length; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
}

const grid = initializeGrid(createGrid(20));
numOfPaths(grid);

console.log(grid.length)
console.log(grid[20][20]);
