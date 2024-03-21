import { BLANK } from "./globalStrings"

export const createPuzzle = (dimensions) => {
    const puzzleMatrix = []
    for(let i = 0; i < dimensions; i++){
        const puzzleColumn = []
        for( let j = 0; j < dimensions; j++){
            puzzleColumn.push(BLANK)
        }
        puzzleMatrix.push(puzzleColumn)
    }
    return puzzleMatrix
}