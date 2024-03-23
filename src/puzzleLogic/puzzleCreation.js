import { CellData } from "./cellDataClass"

const checkValidNeighbor = (range,x,y) => {
    if(x >= 0 && x < range){
        if(y >= 0 && x < range){
            return true
        }
    }
    return false
}

const assignNeighbors = (puzzle) => {
    puzzle.forEach((puzzleColumn,x) => {
        puzzleColumn.forEach((currCell,y) => {
            const neighbors = {}
            if(checkValidNeighbor(puzzle.length,x,y-1)){
                neighbors.north = puzzle[x][y-1]
            }
            if(checkValidNeighbor(puzzle.length,x,y+1)){
                neighbors.south = puzzle[x][y+1]
            }
            if(checkValidNeighbor(puzzle.length,x+1,y)){
                neighbors.east = puzzle[x+1][y]
            }
            if(checkValidNeighbor(puzzle.length,x-1,y)){
                neighbors.west = puzzle[x-1][y]
            }
            currCell.setNeighbors(neighbors)
        })
    })
}

export const createPuzzle = (dimensions) => {
    const puzzleMatrix = []
    for(let i = 0; i < dimensions; i++){
        const puzzleColumn = []
        for( let j = 0; j < dimensions; j++){
            puzzleColumn.push(new CellData())
        }
        puzzleMatrix.push(puzzleColumn)
    }
    assignNeighbors(puzzleMatrix)
    return puzzleMatrix
}