import React from 'react'
import "./CellColumn.css"
import Cell from '../Cell/Cell'

export default function CellColumn(props) {

  return (
    <div className='column'>
      {props.cells.map((currentCell,i) => {
        return <Cell color={currentCell.color} updatePuzzle={props.updatePuzzle} x={props.x} y={i} key={Math.random()}/>
      })}
    </div>
  )
}
