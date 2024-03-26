import React from 'react'
import "./SolveBtn.css"
import { solvePuzzle } from '../../../puzzleLogic/puzzleSolveLogic'
import { createPuzzle } from '../../../puzzleLogic/puzzleCreation'

export default function SolveBtn(props) {

  const {puzzleState,setPuzzleState,puzzleDimensions} = props

  const solveClickHandler = (e) => {
    try{
      const solvedPuzzle = solvePuzzle(puzzleState)
      setPuzzleState([...solvedPuzzle])
    }catch(err){
      window.alert("Invalid puzzle, please double check your entry.")
      setPuzzleState(createPuzzle(puzzleDimensions))
    }
  }

  return (
    <div>
      <button className='solveBtn' onClick={solveClickHandler}>Solve!</button>
    </div>
  )
}
