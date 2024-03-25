import { BLANK, BLUE, YELLOW, NORTH, SOUTH, EAST, WEST } from "./globalStrings"


export const solvePuzzle = (puzzle) => {
    firstRule(puzzle)
    return secondRule(puzzle)
}


const oppositeColor = (color) => {
    if(color === BLUE){
        return YELLOW
    }else if(color === YELLOW){
        return BLUE
    }
}

const rowsAndColumns = (puzzle) => {
    const columns = []
    const rows = []
    let row = []
    puzzle.forEach(columnArr => {
        columns.push(columnArr)
    })
    puzzle[0].forEach(cell => {
        let currCell = cell
        row.push(currCell)
        while(currCell.east){
            row.push(currCell.east)
            currCell = currCell.east
        }
        rows.push(row)
        row = []
    })
    console.log({columns,rows})
    return {columns,rows}
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

const checkMaxColors = (puzzle) => {
    puzzle.forEach(currColumn => {
        let blue = 0
        let yellow = 0
        currColumn.forEach(cell => {
            if(cell.color === BLUE){
                blue++
            }
            if(cell.color === YELLOW){
                yellow++
            }
        })
        if(blue === currColumn.length / 2){
            currColumn.forEach(cell => {
                if(cell.color === BLANK){
                    cell.color = YELLOW
                }
            })
        }
        if(yellow === currColumn.length / 2){
            currColumn.forEach(cell => {
                if(cell.color === BLANK){
                    cell.color = BLUE
                }
            })
        }
    })
}

//check all neighbors for doubles or in-betweens

const firstRule = (puzzle) => {
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

const secondRule = (puzzle) => {
    const {columns,rows} = rowsAndColumns(puzzle)
    checkMaxColors(columns)
    checkMaxColors(rows)
    return puzzle
}