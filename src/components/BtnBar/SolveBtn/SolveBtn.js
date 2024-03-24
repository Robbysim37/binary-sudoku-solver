import React from 'react'
import "./SolveBtn.css"
import { solvePuzzle } from '../../../puzzleLogic/puzzleSolveLogic'

export default function SolveBtn(props) {

  const {puzzleState,setPuzzleState} = props

  const solveClickHandler = (e) => {
    const solvedPuzzle = solvePuzzle(puzzleState)
    setPuzzleState([...solvedPuzzle])
  }

  return (
    <div>
      <button className='solveBtn' onClick={solveClickHandler}>Solve!</button>
    </div>
  )
}
