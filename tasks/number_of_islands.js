// Medium

let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0'],
]

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0', '1','1'],
]

const numberOfIslands = (grid) => {
    if (!grid.length) return 0

    let count = 0;
    let rowsL = grid.length;
    let colsL = grid[0].length

    for (let R = 0; R < rowsL; R++) {
        for (let C = 0; C < colsL; C++) {
            if (grid[R][C] === '1') {
                count++
                markNeighbour(grid, R, C)
            }
        }
    }

    return count
}

const markNeighbour = (grid, R, C) => {
    grid[R][C] = '6';
    if (grid[R][C - 1] === '1') { markNeighbour(grid, R, C - 1) }
    if (grid[R][C + 1] === '1') { markNeighbour(grid, R, C + 1) }

    if (grid[R - 1]?.[C] === '1') { markNeighbour(grid, R - 1, C) }
    if (grid[R + 1]?.[C] === '1') { markNeighbour(grid, R + 1, C) }
}

console.log(numberOfIslands(grid1))
console.log(numberOfIslands(grid2))
