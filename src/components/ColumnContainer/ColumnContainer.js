import React from 'react'
import "./ColumnContainer.css"
import CellColumn from '../CellColumn/CellColumn'
import { useState } from 'react'
import { createPuzzle } from '../../puzzleLogic/puzzleCreation'
import { FOURxFOUR, TWELVExTWELVE } from '../../puzzleLogic/globalStrings'

export default function ColumnContainer() {

  const [puzzleState,setPuzzleState] = useState(createPuzzle(FOURxFOUR))

  console.log(puzzleState)

  return (
    <div className='container'>
      {puzzleState.map(currentColumn => {
        return <CellColumn key={Math.random()} cells={currentColumn}/>
      })}
    </div>
  )
}
