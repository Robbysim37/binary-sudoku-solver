import React from 'react'
import "./ColumnContainer.css"
import CellColumn from '../CellColumn/CellColumn'
import { useState } from 'react'
import { createPuzzle } from '../../puzzleLogic/puzzleCreation'
import { FOURxFOUR } from '../../puzzleLogic/globalStrings'

export default function ColumnContainer() {

  const [puzzleState,setPuzzleState] = useState(createPuzzle(FOURxFOUR))

  console.log(puzzleState)

  return (
    <div className='container'>
      {puzzleState.map(currentColumn => {
        return <CellColumn cells={currentColumn}/>
      })}
    </div>
  )
}
