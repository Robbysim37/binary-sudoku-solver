import React from 'react'
import "./CellColumn.css"
import Cell from '../Cell/Cell'

export default function CellColumn(props) {
  return (
    <div className='column'>
      {props.cells.map(currentCell => {
        return <Cell cellDatakey={Math.random()}/>
      })}
    </div>
  )
}
