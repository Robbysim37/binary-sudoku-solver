import React from 'react'
import "./CellColumn.css"
import Cell from '../Cell/Cell'

export default function CellColumn(props) {

  const {isPuzzleSolved,updatePuzzle,x} = props

  return (
    <div className='column'>
      {props.cells.map((currentCell,i) => {
        return <Cell isPuzzleSolved={isPuzzleSolved} 
        color={currentCell.color} updatePuzzle={updatePuzzle} 
        x={x} y={i} key={Math.random()}/>
      })}
    </div>
  )
}
