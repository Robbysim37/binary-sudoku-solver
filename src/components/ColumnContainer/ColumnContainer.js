import React from 'react'
import "./ColumnContainer.css"
import CellColumn from '../CellColumn/CellColumn'
import { useState } from 'react'
import { createPuzzle } from '../../puzzleLogic/puzzleCreation'
import { FOURxFOUR } from '../../puzzleLogic/globalStrings'

export default function ColumnContainer() {

  //?????????

  const [puzzleState,setPuzzleState] = useState(createPuzzle(FOURxFOUR))

  const updatePuzzle = (x,y,color) => {
    puzzleState[x][y].color = color
    setPuzzleState(puzzleState)
    console.log(puzzleState[x][y])
  }

  return (
    <div className='container'>
      {puzzleState.map((currentColumn,i) => {
        return <CellColumn updatePuzzle={updatePuzzle} x={i} key={Math.random()} cells={currentColumn}/>
      })}
    </div>
  )
}
