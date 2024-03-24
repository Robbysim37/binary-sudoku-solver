import { BLANK, BLUE, YELLOW, NORTH, SOUTH, EAST, WEST } from "./globalStrings"


export const solvePuzzle = (puzzle) => {
    return checkAllNeighbors(puzzle) 
}


const oppositeColor = (color) => {
    if(color === BLUE){
        return YELLOW
    }else if(color === YELLOW){
        return BLUE
    }
}

const checkDirectionalNeighbor = (directionOne,directionTwo,cell) => {
    if(cell[directionOne] && cell[directionTwo]){
        if(cell[directionOne].color !== BLANK && 
            cell[directionOne].color === cell[directionTwo].color){
                cell.color = oppositeColor(cell[directionOne].color)
        }
    }
    if(cell[directionOne]){
        if(cell[directionOne][directionOne]){
            if(cell[directionOne].color === cell[directionOne][directionOne].color
                && cell[directionOne].color !== BLANK){
                cell.color = oppositeColor(cell[directionOne].color)
            }
        }
    }
    if(cell[directionTwo]){
        if(cell[directionTwo][directionTwo]){
            if(cell[directionTwo].color === cell[directionTwo][directionTwo].color
                && cell[directionTwo].color !== BLANK){
                cell.color = oppositeColor(cell[directionTwo].color)
            }
        }
    }
}

const checkAllNeighbors = (puzzle) => {
    puzzle.forEach(column => {
        column.forEach(cell => {
            if(cell.color === BLANK){
                checkDirectionalNeighbor(NORTH,SOUTH,cell)
                checkDirectionalNeighbor(EAST,WEST,cell)
            }
        })
    })
    return puzzle
}